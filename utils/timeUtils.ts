export function parseTime(timeStr: string): Date {
  const now = new Date();
  const [hours, minutes] = timeStr.split(':').map(Number);
  now.setHours(hours, minutes, 0, 0);
  return now;
}

export function calculateEndTime(startTime: string, duration: number): string {
  const start = parseTime(startTime);
  start.setMinutes(start.getMinutes() + duration);
  return `${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`;
}

export function calculateDelay(startTime: string, actualStartTime: string): number {
  const planned = parseTime(startTime);
  const actual = parseTime(actualStartTime);
  const diffInMinutes = Math.round((actual.getTime() - planned.getTime()) / 60000);
  return diffInMinutes > 0 ? diffInMinutes : 0;
}