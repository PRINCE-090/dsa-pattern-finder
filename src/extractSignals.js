export function extractSignals(problemText) {
  const text = problemText.toLowerCase();

  const signals = {
    hasArray: text.includes("array"),
    hasString: text.includes("string"),
    hasMatrix: text.includes("matrix"),

    mentionsSubarray: text.includes("subarray"),
    mentionsSubstring: text.includes("substring"),

    mentionsK: text.includes(" k") || text.includes("k "),
    mentionsWindow: text.includes("window"),

    optimizationWords: [],
    isContiguous: false
  };

  const optimizationKeywords = ["maximum", "minimum", "longest", "shortest"];

  for (const word of optimizationKeywords) {
    if (text.includes(word)) {
      signals.optimizationWords.push(word);
    }
  }

  if (signals.mentionsSubarray || signals.mentionsSubstring || signals.mentionsWindow) {
    signals.isContiguous = true;
  }

  return signals;
}