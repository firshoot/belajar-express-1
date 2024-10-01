const express = require("express"); // Express
const app = express(); // Express app
const expressLayouts = require("express-ejs-layouts"); // Express EJS Layouts
const port = 3000; // Port number

app.set("views", __dirname + "/views"); // Set views directory
app.set("view engine", "ejs"); // Set view engine to EJS

app.use(expressLayouts); // Use express layouts

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//route /home
app.get("/", (req, res) => {
  const news = [
    { title: "News Article 1", content: "Content for news article 1." },
    { title: "News Article 2", content: "Content for news article 2." },
    { title: "News Article 3", content: "Content for news article 3." },
  ];
  res.render("main", { title: "Home Page", news: news });
});

// Route for Contact page
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

// Route for Prodi page
app.get("/prodi", (req, res) => {
  const prodi = [
    {
      prodi: "Sistem Informasi",
      fakultas: "FIKR",
      singkatan: "SI",
    },
    {
      prodi: "Informatika",
      fakultas: "FIKR",
      singkatan: "IF",
    },
    {
      prodi: "Teknik Elektro",
      fakultas: "FIKR",
      singkatan: "TE",
    },
    {
      prodi: "Manajemen Informatika",
      fakultas: "FIKR",
      singkatan: "TI",
    },
    {
      prodi: "Manajemen",
      fakultas: "FEB",
      singkatan: "MJ",
    },
    {
      prodi: "Akuntansi",
      fakultas: "FEB",
      singkatan: "AK",
    },
  ];
  res.render("prodi", { title: "Data Prodi", prodi: prodi });
});

// Route for Mahasiswa page
app.get("/mahasiswa", (req, res) => {
  res.json({
    status: "success",
    message: "Data Mahasiswa",
    data: [
      { npm: 2226240011, nama: "Andre" },
      { npm: 2226240012, nama: "Andri" },
      { npm: 2226240013, nama: "Andro" },
    ],
  });
});

//route /contact
app.get("/contact", (req, res) => {
  // res.send("Contact Page");
  // res.sendFile(__dirname + "/contact.html");
  res.render("contact");
});

//route /about
app.get("/about", (req, res) => {
  // res.sendFile(__dirname + "/about.html");
  res.render("about", { title: "About us", layout: "main" });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:3000`);
});
