// importing experss
import express from "express";
// declaring the express into an variable
const app = express();
// declaring a port address
const PORT = 8000;

app.use("*", (req, res, next) => {
  // capture the error when the url is worng
  const error = {
    code: 404,
    message: "404 Page Not Found",
  };
  next(error);
});

app.use((req, res, next) => {
  const statusCode = error.code;
  console.log(statusCode);
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
