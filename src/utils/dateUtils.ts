export function getCurrentDay(): string {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' });
}