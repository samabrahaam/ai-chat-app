require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3001,
  HF_API_KEY: process.env.HF_API_KEY,
  HF_MODEL: process.env.HF_MODEL,
};
