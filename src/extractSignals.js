export function extractSignals(problemText) {
  const text = problemText.toLowerCase();

  return {
    text,

    hasArray: text.includes("array"),
    hasString: text.includes("string"),
    hasMatrix: text.includes("matrix"),
    isSorted: text.includes("sorted"),

    mentionsSubarray: text.includes("subarray"),
    mentionsSubstring: text.includes("substring"),
    isContiguous:
      text.includes("subarray") ||
      text.includes("substring") ||
      text.includes("contiguous"),

    mentionsK: text.includes(" k") || text.includes("size k"),

    searchWords: ["find", "search", "locate", "target"].filter(w =>
      text.includes(w)
    ),

    optimizationWords: [
      "maximum",
      "minimum",
      "largest",
      "smallest",
      "best"
    ].filter(w => text.includes(w)),

    twoPointerHints:
      text.includes("pair") ||
      text.includes("two pointers") ||
      text.includes("merge"),

    // 🔥 NEW SIGNALS
    dpHints:
      text.includes("subsequence") ||
      text.includes("dp") ||
      text.includes("optimal"),

    graphHints:
      text.includes("graph") ||
      text.includes("node") ||
      text.includes("edge"),

    backtrackingHints:
      text.includes("all combinations") ||
      text.includes("permutation") ||
      text.includes("generate"),

    greedyHints:
      text.includes("maximize") ||
      text.includes("minimize") ||
      text.includes("greedy"),

    slidingWindowHints:
      text.includes("window") ||
      text.includes("fixed size")
  };
}