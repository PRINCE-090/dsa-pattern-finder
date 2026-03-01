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

  if (signals.isContiguous) {
    getPattern("Two Pointers").score += 2;
  }

  if (signals.optimizationWords.length > 0) {
    getPattern("Two Pointers").score += 1;
  }

  
  if (signals.mentionsSubarray) {
    getPattern("Prefix Sum").score += 3;
  }

  if (signals.hasArray) {
    getPattern("Prefix Sum").score += 1;
  }

  
  if (signals.optimizationWords.length > 0) {
    getPattern("Binary Search").score += 2;
  }

  if (signals.hasArray) {
    getPattern("Binary Search").score += 1;
  }

 
  scores.sort((a, b) => b.score - a.score);

  return scores;
}