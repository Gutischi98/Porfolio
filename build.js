const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const projectsData = require('./data/projects.json');

const distDir = path.join(__dirname, 'dist');
const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');

// Ensure dist directory exists
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Helper to render and save file
async function buildPage(templateName, outputName, data = {}) {
    const templatePath = path.join(viewsDir, `${templateName}.ejs`);
    const outputPath = path.join(distDir, outputName);
    
    try {
        const html = await ejs.renderFile(templatePath, {
            ...data,
            page: templateName // used for active navbar state
        });
        fs.writeFileSync(outputPath, html);
        console.log(`✅ Generated: ${outputName}`);
    } catch (err) {
        console.error(`❌ Error generating ${outputName}:`, err);
    }
}

async function build() {
    console.log('🚀 Starting build process...');

    // 1. Copy Public Assets
    console.log('📂 Copying static assets...');
    fs.cpSync(publicDir, distDir, { recursive: true });

    // 2. Build Pages
    console.log('📄 Building pages...');
    
    // Index
    await buildPage('index', 'index.html', { title: 'Inicio' });
    
    // About
    await buildPage('about', 'about.html', { title: 'Quién Soy' });
    
    // Projects (Inject data)
    await buildPage('projects', 'projects.html', { 
        title: 'Proyectos', 
        projects: projectsData 
    });
    
    // Contact
    await buildPage('contact', 'contact.html', { title: 'Contacto' });

    console.log('✨ Build complete! Output directory: /dist');
}

build();
