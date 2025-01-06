const HARMFUL_WORDS = [
  'bad', 'horrible', 'worst', 'terrible', 'hate',
  // Add more words as needed
];

export function filterHarmfulContent(text: string): string {
  return HARMFUL_WORDS.reduce((filtered, word) => {
    const regex = new RegExp(word, 'gi');
    return filtered.replace(regex, '*'.repeat(word.length));
  }, text);
}