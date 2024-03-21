// const express = require("express");
// const fetch = require("node-fetch");
import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const url =
    "https://medium.com/@gargg/bard-api-everything-you-need-to-know-to-get-started-952084c84370#:~:text=Bard%20API%20is%20a%20powerful,text%20prompt%20from%20the%20user.";

  // Construct options for the fetch request
  const options = {
    method: "POST",
    headers: {
      "apy-token":
        "APY0RWxKFaZqFkthHwHsQM4afwv6a2vUlTt0mQHDxvfILriX3RXO5STb55w0tN9tMRCpXxjmodK3KJ",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  };

  fetch("https://api.apyhub.com/ai/summarize-url", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }
      console.log("res==", response);
      return response.json();
    })
    .then((summary) => {
      res.json(summary);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
