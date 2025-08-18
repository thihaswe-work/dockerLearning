import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the server!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
