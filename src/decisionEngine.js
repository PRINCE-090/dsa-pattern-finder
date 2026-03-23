export function buildDecision(signals, rankedPatterns) {
  const primary = rankedPatterns[0];

  const total = rankedPatterns.reduce((sum, p) => sum + p.score, 0);

  const probabilities = {};

  for (const p of rankedPatterns) {
    probabilities[p.pattern] =
      total === 0 ? 0 : Number((p.score / total).toFixed(2));
  }

  const confidence =
    total === 0 ? 0 : Number((primary.score / total).toFixed(2));

  if (primary.score < 3) {
    return {
      primaryPattern: "Unknown",
      confidence: 0,
      patternProbabilities: probabilities
    };
  }

  return {
    primaryPattern: primary.pattern,
    confidence,
    patternProbabilities: probabilities,
    why: [
      signals.mentionsSubarray && "Subarray detected",
      signals.isSorted && "Sorted data detected",
      signals.optimizationWords.length && "Optimization required",
      signals.dpHints && "DP-like structure detected",
      signals.graphHints && "Graph terms detected"
    ].filter(Boolean),

    thinkingSteps: [
      "Understand problem constraints",
      "Identify pattern type",
      "Apply optimized approach",
      "Test edge cases"
    ]
  };
}