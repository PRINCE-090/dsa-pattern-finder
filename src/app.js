import { extractSignals } from "./extractSignals.js";
import { scorePatterns } from "./patternScorer.js";
import { buildDecision } from "./decisionEngine.js";

import express from "express";

const app = express();
app.set("json spaces", 2);
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// import { extractSignals } from "./extractSignals.js";

// app.get("/analyze-test", (req, res) => {
//   const problem = `
//   Given an array of integers and an integer k,
//   find the maximum sum of a subarray of size k.
//   `;

//   const signals = extractSignals(problem);
//   res.json(signals);
// });

app.get("/analyze-test", (req, res) => {
  const problem = `
  Given an array of integers and an integer k,
  find the maximum sum of a subarray of size k.
  `;

  // const signals = extractSignals(problem);
  // const rankedPatterns = scorePatterns(signals);

//   res.json({
//     signals,
//     rankedPatterns
//   });
// });
const signals = extractSignals(problem);
const rankedPatterns = scorePatterns(signals);
const decision = buildDecision(signals, rankedPatterns);

res.json({
  signals,
  rankedPatterns,
  decision
});
});