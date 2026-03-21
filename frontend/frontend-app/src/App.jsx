import { useState } from "react";
import axios from "axios";

function App() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    console.log("Button clicked");

    // Empty input check
    if (!problem.trim()) {
      setError("Please enter a problem");
      return;
    }

    try {
      setError("");

      const res = await axios.post("http://localhost:3000/analyze", {
        problem,
      });

      console.log("Response:", res.data);

      setResult(res.data);
    } catch (err) {
      console.error("Error:", err);

      setError("Failed to analyze problem. Check backend.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>DSA Pattern Finder</h1>

      <textarea
        rows="6"
        cols="70"
        placeholder="Enter DSA problem..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAnalyze}>Analyze</button>

      {/* Error show */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
      )}

      {/* Result show */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Result</h2>

          <p>
            <b>Pattern:</b>{" "}
            {result.analysis.decision.primaryPattern}
          </p>

          <p>
            <b>Confidence:</b>{" "}
            {result.analysis.decision.confidence}
          </p>

          {/* Optional: probabilities */}
          <h3>Probabilities:</h3>
          <pre>
            {JSON.stringify(
              result.analysis.decision.patternProbabilities,
              null,
              2
            )}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;