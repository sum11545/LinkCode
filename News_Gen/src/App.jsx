import React, { useState } from "react";

const App = () => {
  const [topic, setTopic] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    if (!topic) return alert("Please enter a topic!");
    try {
      setLoading(true);
      setNews("");
      const API_KEYS =
        "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";
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEYS}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "user",
                content: `Generate news on topic "${topic}" in div tag with css no html and body tag`,
              },
            ],
          }),
        }
      );
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setNews(data.choices[0].message.content);
      } else {
        alert("No news found.");
      }
    } catch (error) {
      alert("Error fectcing News");
    }
    setLoading(false);
    setTopic("");
  };
  return (
    <>
      <div className="text-center text-4xl font-bold">
        Welcome to News Generator
      </div>
      <div className="mt-5 ">
        <input
          className="ml-[40%] text-black p-2 rounded-md"
          type="text"
          placeholder="Enter a Topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          className="ml-5 bg-orange-400 rounded-md p-2  text-black"
          onClick={getNews}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
      {news && (
        <div
          className="mt-10 p-5 bg-gray-200 rounded-md mx-40"
          dangerouslySetInnerHTML={{ __html: news }}
        />
      )}
    </>
  );
};

export default App;
