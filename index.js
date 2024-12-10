import express from "express";
import bodyParser from "body-parser";
import path from "path"; 
import { URLSearchParams } from "url";

const app = express();
const port = 3000;

app.use(express.static(path.join(process.cwd(), "public"))); 
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views/partials/assets/');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index.ejs"); 
}); 

app.get("/about", (req, res) => {
  res.render("about.ejs"); 
}); 

app.get("/contact", (req, res) => {
  res.render("contact.ejs"); 
}); 

app.get("/category", (req, res) => {
  res.render("category.ejs"); 
});

app.get("/single-post", (req, res) => {
  res.render("single-post.ejs"); 
});

app.get("/starter-page", (req, res) => {
  res.render("/starter-page.ejs"); 
});

app.get("/blog-details", (req, res) => {
  res.render("blog-details.ejs"); 
}); 

app.post("/submit", (req, res) => {

const name = req.body["name"]; 
const time = new Date(); 
const comment = req.body["comment"]; 
const user = "/public/assets/img/blog/user.png"; 

  res.render("submit.ejs", {name, time, comment}); 

});

// update = put 

// app.get("/edit", (req, res) => {

//   const name = req.query.name || ""; 
//   const comment = req.query.comment || ""; 

// res.render("edit.ejs", { name, comment }); 

// }); 

// app.get("/edit", (req, res) => {

//   const name = req.body["name"]; 
//   const time = new Date(); 
//   const comment = req.body["comment"]; 
//   const user = "/public/assets/img/blog/user.png"; 
  
//     res.render("edit.ejs", {name, time, comment}); 

// }); 

// app.post("/edit", (req, res) => {
//   const name = req.query.name || ""; 
//   const comment = req.query.comment || ""; 
//   res.redirect(`/blog-details?name=${encodeURIComponent(name)}&comment=${encodeURIComponent}(comment)}`);
// })

// app.post("/edit", (req, res) => {
//   const name = req.query.name || ""; 
//   const comment = req.query.comment || ""; 
//   res.redirect(`/blog-details?name=${encodeURIComponent(name)}&comment=${encodeURIComponent}(comment)}`);
// })

// app.get("/edit", (req, res) => {
//   const name = req.query.name || ""; // Get 'name' from query params
//   const comment = req.query.comment || ""; // Get 'comment' from query params
//   res.render("edit.ejs", { name, comment }); // Pass variables to edit.ejs
// });

// app.post("/edit", (req, res) => {
// const name = req.query.name || ""; // Get 'name' from query params
//   const comment = req.query.comment || ""; // Get 'comment' from query params
//   res.render("edit.ejs", { name, comment }); // Pass variables to edit.ejs
// })


app.get("/delete", (req, res) => {
res.render("delete.ejs"); 
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});