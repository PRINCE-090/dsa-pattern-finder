export function scorePatterns(signals) {
  const scores = [
    { pattern: "Sliding Window", score: 0 },
    { pattern: "Two Pointers", score: 0 },
    { pattern: "Prefix Sum", score: 0 },
    { pattern: "Binary Search", score: 0 }
  ];

  const getPattern = (name) =>
    scores.find((p) => p.pattern === name);

  
  if (signals.mentionsSubarray) {
    getPattern("Sliding Window").score += 3;
  }

  if (signals.optimizationWords.length > 0) {
    getPattern("Sliding Window").score += 2;
  }

  if (signals.mentionsK) {
    getPattern("Sliding Window").score += 2;
  }

  if (signals.isContiguous) {
    getPattern("Sliding Window").score += 1;
  }

 
  if (signals.hasArray) {
    getPattern("Two Pointers").score += 2;
  }

  if (signals.isSorted) {
    getPattern("Two Pointers").score += 2;
  }

  if (signals.twoPointerHints) {
    getPattern("Two Pointers").score += 3;
  }

  
  if (signals.mentionsSubarray) {
    getPattern("Prefix Sum").score += 3;
  }

  if (signals.hasArray) {
    getPattern("Prefix Sum").score += 1;
  }

 
  if (signals.isSorted && signals.searchWords.length > 0) {
    getPattern("Binary Search").score += 4;
  }

  if (signals.hasArray && signals.searchWords.length > 0) {
    getPattern("Binary Search").score += 2;
  }

  // Sort by score
  scores.sort((a, b) => b.score - a.score);

  return scores;
}