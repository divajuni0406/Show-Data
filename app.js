const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.use(expressLayouts);
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const Routes = require("./routes/routes");

app.use(Routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
