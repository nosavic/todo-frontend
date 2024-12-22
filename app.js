const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const viewsRoutes = require("./routes/viewRoutes");

const app = express();

// Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // This should be working fine if cookie-parser is installed

// Route setup
app.use("/", viewsRoutes); // Make sure 'viewsRoutes' is a valid router object

console.log("Frontend loaded!");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Frontend server running on port ${PORT}`));
