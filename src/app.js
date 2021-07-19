const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
require("./db/conn");
const Feedback = require("./models/allfeedbacks");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",view_path);
hbs.registerPartials(partial_path);


app.get('/', (req, res) => {
    res.render("index");
});
app.get('/about', (req, res) => {
    res.render("about");
});
app.get('/skills', (req, res) => {
    res.render("skills");
});
app.get('/academics', (req, res) => {
    res.render("academics");
});
app.get('/projects', (req, res) => {
    res.render("projects");
});

app.get('/feedback', (req, res) => {
    res.render("feedback");
});
app.post('/feedback', async (req, res) => {
    try {
        const giveFeedback = new Feedback({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Phone: req.body.Phone,
            Email: req.body.Email,
            Age: req.body.Age,
            Gender: req.body.Gender,
            Comments: req.body.Comments
    });

    const received = await giveFeedback.save();
    res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})