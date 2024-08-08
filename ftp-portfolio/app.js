const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 30051;

// Serve the static files from the 'out' directory
app.use(express.static(path.join(__dirname, "build")));

// Fallback to index.html for Single Page Applications (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "out", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
