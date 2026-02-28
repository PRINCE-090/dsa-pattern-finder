import express from "express";

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import { extractSignals } from "./extractSignals.js";

app.get("/analyze-test", (req, res) => {
  const problem = `
  Given an array of integers and an integer k,
  find the maximum sum of a subarray of size k.
  `;

  const signals = extractSignals(problem);
  res.json(signals);
});