const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = 3001;

app.use(cors()); // Use the cors middleware

app.get("/fetch-medium-feed", async (req, res) => {
  try {
    const response = await axios.get(
      "https://medium.com/feed/@indurangakawishwara2003"
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Failed to fetch data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
