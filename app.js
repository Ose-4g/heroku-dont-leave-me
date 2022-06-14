require("dotenv").config();
const { schedule } = require("node-cron");
const axios = require("axios");

const urls = process.env.URLS.split(",");
schedule(
  "0 */5 * * * *",
  () => {
    console.log("heroku requests initiated");
    for (const url of urls) {
      console.log(`making request to ${url}`);
      axios.get(url);
    }
  },
  { scheduled: true }
);
