
export enum AppStatus {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface ProcessingStep {
  id: string;
  label: string;
  status: 'pending' | 'active' | 'done';
}

export interface Stats {
  sheetsSaved: number;
  timeSavedMinutes: number;
  carbonReducedKg: number;
}
