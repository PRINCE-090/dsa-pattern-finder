import fetch from "node-fetch";

export async function fetchProblemFromUrl(url) {
  const slug = url.split("/problems/")[1].split("/")[0];

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        query questionData($titleSlug: String!) {
          question(titleSlug: $titleSlug) {
            content
            title
          }
        }
      `,
      variables: { titleSlug: slug }
    })
  });

  const data = await response.json();

  if (!data.data || !data.data.question) {
    throw new Error("Failed to fetch problem");
  }

  const html = data.data.question.content;

  const text = html.replace(/<[^>]*>?/gm, " ");

  return text;
}