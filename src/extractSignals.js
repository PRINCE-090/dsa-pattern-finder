export function extractSignals(problemText) {
  const text = problemText.toLowerCase();

  const signals = {
    hasArray: text.includes("array"),
    hasString: text.includes("string"),
    hasMatrix: text.includes("matrix"),

    mentionsSubarray: text.includes("subarray"),
    mentionsSubstring: text.includes("substring"),

    mentionsK:
      text.includes(" k ") ||
      text.includes("size k") ||
      text.includes("length k"),

    mentionsWindow: text.includes("window"),

    optimizationWords: [],
    searchWords: [],

    twoPointerHints: false,
    isContiguous: false,
    isSorted: false
  };

  
  const optimizationKeywords = [
    "maximum",
    "minimum",
    "largest",
    "smallest",
    "max",
    "min",
    "highest",
    "lowest",
    "best"
  ];

  for (const word of optimizationKeywords) {
    if (text.includes(word)) {
      signals.optimizationWords.push(word);
    }
  }


  const searchKeywords = [
    "find",
    "search",
    "locate",
    "position",
    "index",
    "target"
  ];

  for (const word of searchKeywords) {
    if (text.includes(word)) {
      signals.searchWords.push(word);
    }
  }

  
  if (
    text.includes("subarray") ||
    text.includes("substring") ||
    text.includes("contiguous") ||
    text.includes("segment") ||
    text.includes("consecutive")
  ) {
    signals.isContiguous = true;
  }

  
  if (text.includes("sorted")) {
    signals.isSorted = true;
  }

  
  if (
    text.includes("merge") ||
    text.includes("pair") ||
    text.includes("two pointers") ||
    text.includes("remove duplicates")
  ) {
    signals.twoPointerHints = true;
  }

  return signals;
}