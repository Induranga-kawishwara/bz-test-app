const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { parseStringPromise } = require("xml2js");
const app = express();
const port = 3001;

app.use(cors());

const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>?/gm, "");
};

app.get("/fetch-medium-feed", async (req, res) => {
  try {
    const response = await axios.get(
      "https://medium.com/feed/@indurangakawishwara2003"
    );
    const xml = response.data;

    const result = await parseStringPromise(xml);
    const items = result.rss.channel[0].item;
    const feedData = items.map((item) => {
      const publishDate = new Date(item.pubDate[0]);
      const publishDateOnly = publishDate.toISOString().split("T")[0];
      const topicName = removeHtmlTags(item.title[0]);
      const creator = item["dc:creator"]
        ? removeHtmlTags(item["dc:creator"][0])
        : "Unknown";
      const imgMatch = item["content:encoded"][0].match(
        /<img[^>]+src="([^">]+)"/
      );
      const imgUrl = imgMatch ? imgMatch[1] : null;
      return { publishDate: publishDateOnly, topicName, creator, imgUrl };
    });

    const latestFeedData = feedData
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, 3);

    res.json(latestFeedData);
  } catch (error) {
    res.status(500).send("Failed to fetch data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
