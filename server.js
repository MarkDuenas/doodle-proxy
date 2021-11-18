const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 8000;

const API_URL = "https://www.google.com/doodles/json";

app.use(cors());
app.use(express.json());

app.get("/get/doodle/:year/:month", async (req, res) => {
  try {
    let result = await axios.get(
      `${API_URL}/${req.params.year}/${req.params.month}`
    );
    // console.log(result.headers);
    res.status(200).json(result.data);
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
