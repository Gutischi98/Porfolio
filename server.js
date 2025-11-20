const express = require('express');
const app = express();
const path = require('path');
const projectsData = require('./data/projects.json');

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Inicio', page: 'home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Quién Soy', page: 'about' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { 
        title: 'Proyectos', 
        page: 'projects',
        projects: projectsData
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto', page: 'contact' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
