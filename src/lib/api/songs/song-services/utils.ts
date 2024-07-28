import Formatter from '$lib/utilities/formatter';
import type Soundcloud from 'soundcloud.ts';
import type { SoundcloudImportItem } from './types';

/**
 * Imports a song from Soundcloud based on the provided URL.
 *
 * @param {string} url - The URL of the Soundcloud track.
 * @return {Promise<SoundcloudImportItem>} The parsed data of the imported song.
 * @throws {Error}
 */
export async function importFromSoundcloud(
  api: Soundcloud,
  url: string,
): Promise<SoundcloudImportItem> {
  const track = await api.tracks.getV2(url);

  const parsedQuery = parseQuery(track.title);
  const releaseDate = new Date(track.release_date || track.display_date);
  const labelName = track.label_name || track.user.username;

  if (parsedQuery.artists.length == 0) {
    parsedQuery.artists.push(track.user.username);
  }

  console.log(await api.util.streamLink(url));

  const data: SoundcloudImportItem = {
    artists: parsedQuery.artists,
    title: parsedQuery.title,
    permalink: track.permalink,
    releaseDate: releaseDate,
    label: labelName,
    artUrl: track.artwork_url || track.user.avatar_url,
    genre: track.genre,
    type: parsedQuery.type,
  };

  return data;
}

/**
 *
 * @param query A song title query such as "Artist 1 , Artist 2 & Artist 3 - Song Title (feat. Artist 4) - Artist 5 Remix"
 * @returns an object with the title separated into artists and song title
 */
export function parseQuery(query: string) {
  // Cleanup query
  query = query
    .replace('(ft.', '(feat.') // some people use ft. as a short form, we unify it to feat.
    .replace('(w/', '(feat.') // or they use w/
    .replace('(featuring', '(feat.') // or they use featuring
    .replaceAll('[', '(') // replace [] with ()
    .replaceAll(']', ')'); // ^^

  // filter feature bracket artists from query if available
  const queryFeatureArtists = query.includes('(feat.')
    ? query.split('(feat.')[1].split(')')[0]
    : undefined;
  // remove feature bracket
  query = query.replace(`(feat.${queryFeatureArtists})`, '');

  const queryParts = query.split('-');
  const queryArtists = queryParts.length > 1 ? queryParts[0] : undefined;
  const queryTitle = queryArtists ? queryParts.slice(1).join(' ') : query;

  const title = Formatter.cleanWhitespace(queryTitle);
  let artists: string[] = [];

  // MAIN ARTISTS
  if (queryArtists) {
    artists.push(...artistStringToList(queryArtists));
  }

  // FEATURE ARTISTS
  if (queryFeatureArtists) {
    artists.push(...artistStringToList(queryFeatureArtists));
  }

  // ARTISTS FORMATTING (CAMEL CASE)
  artists = artists.map((artist) => {
    return artist
      .split(' ')
      .map((x) => Formatter.pascalCase(x))
      .join(' ');
  });

  // RELEASE TYPE
  const type = /remix|edit|vip|flip|bootleg/.test(queryTitle.toLowerCase()) ? 'Remix' : 'Original';

  return {
    title: title,
    artists: artists,
    type: type,
  };
}

export function artistStringToList(artistString: string) {
  // artists separated by comma or &
  return artistString.split(/(?:,|\s&|\sx)\s+/).map((x) => x.trim());
}
