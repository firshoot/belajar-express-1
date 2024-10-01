// index.js
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const port = 3000;

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Use Express layouts
app.use(expressLayouts);

// Set default layout file (main.ejs)
app.set("layout", "main");

// Route for the home page
app.get("/", (req, res) => {
  const news = [
    { title: "News Article 1", content: "Content for news article 1." },
    { title: "News Article 2", content: "Content for news article 2." },
    { title: "News Article 3", content: "Content for news article 3." },
  ];
  res.render("index", { title: "Home", news });
});

// Route for About page
app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

// Route for Contact page
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

// Route for Prodi page
app.get("/prodi", (req, res) => {
  const prodi = [
    { prodi: "Sistem Informasi", fakultas: "FIKR", singkatan: "SI" },
    { prodi: "Informatika", fakultas: "FIKR", singkatan: "IF" },
    { prodi: "Teknik Elektro", fakultas: "FIKR", singkatan: "TE" },
  ];
  res.render("prodi", { title: "Programs of Study", prodi });
});

// Route for Mahasiswa page
app.get("/mahasiswa", (req, res) => {
  const mahasiswa = [
    { npm: 2226240011, nama: "Andre" },
    { npm: 2226240012, nama: "Andri" },
    { npm: 2226240013, nama: "Andro" },
  ];
  res.render("mahasiswa", { title: "Students", mahasiswa });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:3000`);
});
