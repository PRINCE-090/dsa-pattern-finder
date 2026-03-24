export function extractSignals(problemText) {

  const text = problemText.toLowerCase();

  return {
    text,

    hasArray: text.includes("array") || text.includes("nums"),

    mentionsSubarray:
      text.includes("subarray") ||
      text.includes("substring") ||
      text.includes("contiguous"),

    mentionsK:
      text.includes(" k") ||
      text.includes("size k"),

    isSorted: text.includes("sorted"),

    optimizationWords: [
      "maximum",
      "minimum",
      "largest",
      "smallest"
    ].filter(w => text.includes(w)),

    // 🔥 IMPORTANT (3sum fix)
    twoPointerHints:
      text.includes("pair") ||
      text.includes("pairs") ||
      text.includes("triplet") ||
      text.includes("triplets") ||
      text.includes("sum") ||
      text.includes("target") ||
      text.includes("three") ||
      text.includes("two pointers"),

    slidingWindowHints:
      text.includes("window") ||
      text.includes("fixed size"),

    dpHints:
      text.includes("subsequence") ||
      text.includes("dp"),

    graphHints:
      text.includes("graph") ||
      text.includes("node")
  };
}