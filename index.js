const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("mongoose Conneted");
    app.listen(PORT, () => {
      console.log(`server running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/movie", bookRoutes);
