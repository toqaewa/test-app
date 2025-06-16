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
  date: string;
  endTime: string;
  delayTime: number;
}

export const STATUS_CONFIG = {
  notConfirmed: { label: 'Not Confirmed', color: '#B45100' },
  confirmed: { label: 'Confirmed', color: '#B4A500' },
  started: { label: 'Started', color: '#00B40C' },
};