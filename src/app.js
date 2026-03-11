import express from "express";
import { extractSignals } from "./extractSignals.js";
import { scorePatterns } from "./patternScorer.js";
import { buildDecision } from "./decisionEngine.js";
import { fetchProblemFromUrl } from "./fetchproblem.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.set("json spaces", 2);


app.get("/", (req, res) => {
  res.json({
    project: "DSA Pattern Finder API",
    description:
      "Analyze a DSA problem statement and detect the most likely algorithmic pattern.",
    endpoints: {
      health: "GET /health",
      analyze: "POST /analyze"
    }
  });
});


app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "DSA Pattern Finder API"
  });
});


app.post("/analyze", async (req, res) => {
  let { problem, url } = req.body;

  try {
    if (url) {
      problem = await fetchProblemFromUrl(url);
    }

    if (!problem || typeof problem !== "string" || problem.trim().length === 0) {
      return res.status(400).json({
        error: "Problem text or URL required"
      });
    }

    const cleanedProblem = problem.trim();

    const signals = extractSignals(cleanedProblem);
    const rankedPatterns = scorePatterns(signals);
    const decision = buildDecision(signals, rankedPatterns);

    res.json({
      input: cleanedProblem.slice(0, 300),
      analysis: {
        signals,
        rankedPatterns,
        decision
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});