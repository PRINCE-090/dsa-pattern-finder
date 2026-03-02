export function buildDecision(signals, rankedPatterns) {
  if (!rankedPatterns || rankedPatterns.length === 0) {
    return null;
  }

  const primary = rankedPatterns[0];

  const totalScore = rankedPatterns.reduce(
    (sum, p) => sum + p.score,
    0
  );

  const confidence =
    totalScore === 0 ? 0 : Number((primary.score / totalScore).toFixed(2));

  const why = [];


  if (signals.mentionsSubarray) {
    why.push("Problem explicitly mentions subarray/substring.");
  }

  if (signals.optimizationWords.length > 0) {
    why.push(
      `Optimization required (${signals.optimizationWords.join(", ")}).`
    );
  }

  if (signals.mentionsK) {
    why.push("Fixed size or constraint variable (k) detected.");
  }

  if (signals.isContiguous) {
    why.push("Contiguous segment implied.");
  }

  
  const patternSteps = {
    "Sliding Window": [
      "Initialize window boundaries.",
      "Expand right pointer to include elements.",
      "Shrink from left when constraint breaks.",
      "Track best result during traversal."
    ],
    "Two Pointers": [
      "Initialize two pointers.",
      "Move pointers based on condition.",
      "Maintain required invariant.",
      "Stop when pointers cross."
    ],
    "Prefix Sum": [
      "Precompute cumulative sums.",
      "Use prefix differences to compute range values.",
      "Avoid recomputing subarray sums repeatedly."
    ],
    "Binary Search": [
      "Identify monotonic condition.",
      "Set low and high boundaries.",
      "Check mid and adjust search space.",
      "Repeat until convergence."
    ]
  };

  return {
    primaryPattern: primary.pattern,
    confidence,
    why,
    thinkingSteps: patternSteps[primary.pattern] || []
  };
}