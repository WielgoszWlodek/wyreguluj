

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const post1Route = require("./routes/posts1");
const categoryRoute = require("./routes/categories");
const cors = require("cors");

dotenv.config();
app.use(express.json());

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/posts1", post1Route);
app.use("/api/categories", categoryRoute);
app.use(cors());
app.get("/", (req, res) => {
res.setHeader("Access-Control-Allow-Credentials", "true");
}
)

app.listen("5000", () => {
    console.log("Działa");
});