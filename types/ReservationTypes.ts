export type Status = 'notConfirmed' | 'confirmed' | 'started';

export interface Reservation {
  id: string;
  guest: string;
  table: string;
  startTime: string;
  duration: number;
  partySize: number;
  comment: string;
  status: Status;
  date: string; // YYYY-MM-DD
}

export const STATUS_CONFIG = {
  notConfirmed: { label: 'Not Confirmed', color: '#FFA726' },
  confirmed: { label: 'Confirmed', color: '#29B6F6' },
  started: { label: 'Started', color: '#66BB6A' },
};