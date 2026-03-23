export function scorePatterns(signals) {
  const patterns = [
    { pattern: "Sliding Window", score: 0 },
    { pattern: "Two Pointers", score: 0 },
    { pattern: "Prefix Sum", score: 0 },
    { pattern: "Binary Search", score: 0 },
    { pattern: "Dynamic Programming", score: 0 },
    { pattern: "Graph", score: 0 },
    { pattern: "Backtracking", score: 0 },
    { pattern: "Greedy", score: 0 }
  ];

  const get = name => patterns.find(p => p.pattern === name);

  // 🔹 Sliding Window
  if (signals.mentionsSubarray) get("Sliding Window").score += 3;
  if (signals.mentionsK) get("Sliding Window").score += 2;
  if (signals.optimizationWords.length) get("Sliding Window").score += 2;
  if (signals.slidingWindowHints) get("Sliding Window").score += 2;

  // 🔹 Two Pointers
  if (signals.hasArray) get("Two Pointers").score += 2;
  if (signals.isSorted) get("Two Pointers").score += 2;
  if (signals.twoPointerHints) get("Two Pointers").score += 3;

  // 🔹 Prefix Sum
  if (signals.mentionsSubarray) get("Prefix Sum").score += 2;
  if (signals.hasArray) get("Prefix Sum").score += 1;

  // 🔹 Binary Search
  if (signals.isSorted && signals.searchWords.length)
    get("Binary Search").score += 4;

  // 🔹 Dynamic Programming
  if (signals.dpHints) get("Dynamic Programming").score += 4;

  // 🔹 Graph
  if (signals.graphHints) get("Graph").score += 4;

  // 🔹 Backtracking
  if (signals.backtrackingHints) get("Backtracking").score += 4;

  // 🔹 Greedy
  if (signals.greedyHints) get("Greedy").score += 3;

  // 🔥 PENALTY LOGIC (important)
  if (!signals.isSorted) get("Binary Search").score -= 2;
  if (!signals.mentionsSubarray) get("Sliding Window").score -= 1;

  patterns.sort((a, b) => b.score - a.score);

  return patterns;
}