const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware
const { parseStringPromise } = require("xml2js"); // Import xml2js to parse XML data
const app = express();
const port = 3001;

app.use(cors()); // Use the cors middleware

// Function to remove HTML tags
const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>?/gm, "");
};

app.get("/fetch-medium-feed", async (req, res) => {
  try {
    const response = await axios.get(
      "https://medium.com/feed/@indurangakawishwara2003"
    );
    const xml = response.data;

    // Parse the XML data
    const result = await parseStringPromise(xml);
    const items = result.rss.channel[0].item;
    const feedData = items.map((item) => {
      const publishDate = item.pubDate[0];
      const topicName = removeHtmlTags(item.title[0]);
      return { publishDate, topicName };
    });
    res.json(feedData);
  } catch (error) {
    res.status(500).send("Failed to fetch data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
