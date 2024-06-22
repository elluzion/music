export type WorkerUpdate = {
  data?: WorkerData;
  status?: WorkerStatus;
};

export type WorkerStatus = {
  progress: number;
  checkpoint: 'IDLE' | 'KEYDATA' | 'TEMPO' | 'LOUDNESS' | 'FINISHED';
};

export type WorkerData = {
  keyData?: KeyData;
  tempo?: number;
  loudness?: {
    overall: number;
    range: number;
  };
};

export type KeyData = {
  key: string;
  scale: string;
};
