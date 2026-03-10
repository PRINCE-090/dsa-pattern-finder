# DSA Pattern Finder

API that analyzes a DSA problem description and predicts the most likely algorithmic pattern.

## Features
- Sliding Window detection
- Two Pointers detection
- Binary Search detection
- Prefix Sum detection
- Pattern confidence scoring
- Explanation of reasoning

## API

POST /analyze

Example request:
{
  "problem": "Find maximum sum of subarray of size k"
}

Example response:
{
  "primaryPattern": "Sliding Window",
  "confidence": 0.57
}

## Tech Stack
- Node.js
- Express.js
