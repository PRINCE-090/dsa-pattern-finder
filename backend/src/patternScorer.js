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

  // 🔹 Sliding Window (STRICT)
  if (signals.mentionsSubarray) get("Sliding Window").score += 3;
  if (signals.mentionsK) get("Sliding Window").score += 3;
  if (signals.slidingWindowHints) get("Sliding Window").score += 2;

  // 🔹 Two Pointers (BOOSTED 🔥)
  if (signals.hasArray) get("Two Pointers").score += 3;

  if (signals.twoPointerHints)
    get("Two Pointers").score += 5;   // 🔥 BIG BOOST

  if (signals.isSorted)
    get("Two Pointers").score += 2;

  // 🔹 Prefix Sum
  if (signals.mentionsSubarray) get("Prefix Sum").score += 2;
  if (signals.hasArray) get("Prefix Sum").score += 1;

  // 🔹 Binary Search
  if (signals.isSorted && signals.searchWords?.length)
    get("Binary Search").score += 4;

  // 🔹 Dynamic Programming
  if (signals.dpHints) get("Dynamic Programming").score += 4;

  // 🔹 Graph
  if (signals.graphHints) get("Graph").score += 5;

  // 🔹 Backtracking
  if (signals.backtrackingHints) get("Backtracking").score += 5;

  // 🔹 Greedy
  if (signals.greedyHints) get("Greedy").score += 4;

  // 🔥 PENALTIES (IMPORTANT)
  if (!signals.mentionsSubarray)
    get("Sliding Window").score -= 3;

  if (!signals.isSorted)
    get("Binary Search").score -= 3;

  // 🔥 SAFETY (avoid negative domination)
  patterns.forEach(p => {
    if (p.score < 0) p.score = 0;
  });

  patterns.sort((a, b) => b.score - a.score);

  return patterns;
}