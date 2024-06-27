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
    const urls = [
      "https://medium.com/feed/@indurangakawishwara2003",
      "https://medium.com/feed/@bugzero",
      "https://medium.com/feed/@m.m.n.c.marasinghe04",
      "https://medium.com/feed/@kawyabcs",
      "https://medium.com/feed/@akilamaithripala",
      "https://medium.com/feed/@janukadharmapriya",
    ];

    const requests = urls.map((url) => axios.get(url));
    const results = await Promise.all(requests);

    const xmlData = results.map((result) => result.data);

    let allItems = [];
    for (const xml of xmlData) {
      const parsedResult = await parseStringPromise(xml);

      const channels = parsedResult.rss.channel;
      channels.forEach((channel) => {
        allItems = allItems.concat(channel.item);
      });
    }

    const feedData = allItems.map((item) => {
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
    console.error("Error fetching data:", error);
    res.status(500).send("Failed to fetch data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
