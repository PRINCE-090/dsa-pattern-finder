export function buildDecision(signals, rankedPatterns) {
  if (!rankedPatterns || rankedPatterns.length === 0) {
    return {
      primaryPattern: "Unknown",
      confidence: 0
    };
  }

  const primary = rankedPatterns[0];

  const totalScore = rankedPatterns.reduce(
    (sum, p) => sum + p.score,
    0
  );

  const confidence =
    totalScore === 0 ? 0 : Number((primary.score / totalScore).toFixed(2));

 
  if (primary.score < 3) {
    return {
      primaryPattern: "Unknown",
      confidence: 0,
      message:
        "No strong DSA pattern detected from the problem description."
    };
  }

  const why = [];

  if (signals.mentionsSubarray) {
    why.push("Problem mentions subarray/substring.");
  }

  if (signals.optimizationWords.length > 0) {
    why.push(
      `Optimization required (${signals.optimizationWords.join(", ")})`
    );
  }

  if (signals.mentionsK) {
    why.push("Fixed size constraint (k) detected.");
  }

  if (signals.isSorted) {
    why.push("Problem involves sorted data.");
  }

  const patternSteps = {
    "Sliding Window": [
      "Initialize a window over the array.",
      "Expand window using right pointer.",
      "Shrink window from left when needed.",
      "Track optimal result."
    ],

    "Two Pointers": [
      "Initialize two pointers.",
      "Move pointers based on condition.",
      "Compare or merge elements.",
      "Stop when pointers cross."
    ],

    "Prefix Sum": [
      "Precompute cumulative sums.",
      "Use prefix difference for range queries.",
      "Avoid recalculating sums repeatedly."
    ],

    "Binary Search": [
      "Identify monotonic condition.",
      "Set low and high pointers.",
      "Check mid element.",
      "Reduce search space."
    ]
  };

  return {
    primaryPattern: primary.pattern,
    confidence,
    why,
    thinkingSteps: patternSteps[primary.pattern] || []
  };
}