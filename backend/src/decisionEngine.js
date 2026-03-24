export function buildDecision(signals, rankedPatterns) {
 const primary = rankedPatterns[0];
   const total = rankedPatterns.reduce((sum, p) => sum + p.score, 0); 
   const probabilities = {};
    for (const p of rankedPatterns) {
       probabilities[p.pattern] = total === 0 ? 0 : Number((p.score / total).toFixed(2));
      }
        const confidence = total === 0 ? 0 : Number((primary.score / total).toFixed(2));

    if (primary.score < 1) {
  return {
    primaryPattern: "Unknown",
    confidence: 0,
    patternProbabilities: probabilities,
    why: ["Not enough signals detected"],
    thinkingSteps: [
      "Read problem carefully",
      "Try brute force approach",
      "Look for patterns like array, graph, or DP"
    ]
  };
}


return {
  primaryPattern: primary.pattern,
  confidence,
  patternProbabilities: probabilities,

  
  why: (() => {
    const reasons = [];

    if (signals.twoPointerHints) {
      reasons.push("Pair / Triplet / Sum based problem detected");
    }

    if (signals.hasArray) {
      reasons.push("Array-based problem");
    }

    if (signals.mentionsSubarray) {
      reasons.push("Subarray / contiguous pattern detected");
    }

    if (signals.optimizationWords.length) {
      reasons.push("Optimization keywords found (max/min)");
    }

    if (reasons.length === 0) {
      reasons.push("Pattern selected based on scoring heuristics");
    }

    return reasons;
  })(),


  thinkingSteps: (() => {
    const steps = [];

    if (signals.twoPointerHints) {
      steps.push("Sort the array (if required)");
      steps.push("Fix one element and use two pointers");
      steps.push("Move pointers based on sum comparison");
    }

    else if (signals.mentionsSubarray) {
      steps.push("Use sliding window technique");
      steps.push("Expand window to include elements");
      steps.push("Shrink window when needed");
    }

    else if (signals.dpHints) {
      steps.push("Define DP state");
      steps.push("Build recurrence relation");
      steps.push("Use memoization or tabulation");
    }

    else {
      steps.push("Understand problem constraints");
      steps.push("Try brute force approach");
      steps.push("Optimize using suitable pattern");
    }

    return steps;
  })(),
};
}