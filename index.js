// Summary

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

// Bard Part

// // Import required modules
// import express from "express";
// import Bard from "bard-ai";

// // Create an instance of express
// const app = express();

// // Set the Bard API key
// process.env.BARD_API_KEY = "AIzaSyCTYkCwyf7PR-SVIdrFtgy5Ant9LBdEyqc";

// // Define a route
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.get("/bard", async (req, res) => {
//   try {
//     const bard = new Bard();

//     const response = await bard.ask("What is Bard?");

//     const bardResponse = response.data;

//     console.log(bardResponse);

//     res.send(bardResponse);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Import required modules
// import express from "express";

// Gemini Part
// const express = require("express");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // import Bard from "bard-ai";
// const { BardAPI } = require("bard-api-node");

// // Create an instance of express
// const app = express();

// // Set the Bard API key
// process.env.BARD_API_KEY = "AIzaSyCTYkCwyf7PR-SVIdrFtgy5Ant9LBdEyqc";

// // Define a route
// // app.get("/", (req, res) => {
// //   res.send("Hello, World!");
// // });

// app.get("/", async (req, res) => {
//   try {
//     const genAI = new GoogleGenerativeAI(
//       "AIzaSyCTYkCwyf7PR-SVIdrFtgy5Ant9LBdEyqc"
//     );

//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const prompt = "Write a story about one piece anime";

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     res.send("Hello, World!");
//     console.log(text);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
