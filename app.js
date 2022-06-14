require("dotenv").config();
const { schedule } = require("node-cron");
const axios = require("axios");

const urls = process.env.URLS.split(",");
schedule(
  "0 */5 * * * *",
  async () => {
    console.log("heroku requests initiated");
    const promises = [];
    try {
      for (const url of urls) {
        console.log(`making request to ${url}`);
        promises.push(axios.get(url));
      }
      await Promise.all(promises);
    } catch (error) {
      console.log("an error occured");
    }
  },
  { scheduled: true }
);
