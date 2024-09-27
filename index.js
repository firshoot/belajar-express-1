const express = require("express"); // Express
const app = express(); // Express app
const port = 3000; // Port number

app.set("view engine", "ejs"); // Set view engine to EJS

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//route /home
app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  res.render("index");
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
  res.render("about");
});

//route /mahasiswa
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

//route /dosen
app.get("/dosen", (req, res) => {
  res.json({
    status: "success",
    message: "Data Dosen",
    data: [
      { prodi: "Sistem Informasi", dosen: ["Iis", "Faris", "Dafid"] },
      { prodi: "Informatika", dosen: ["Derry", "Siska", "Yohannes"] },
    ],
  });
});

//route not found
app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
