const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const projectsData = require('./data/projects.json');

const distDir = path.join(__dirname, 'dist');
const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');

// Asegurar que el directorio dist exista
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Función auxiliar para renderizar y guardar archivos
async function buildPage(templateName, outputName, data = {}) {
    const templatePath = path.join(viewsDir, `${templateName}.ejs`);
    const outputPath = path.join(distDir, outputName);
    
    try {
        const html = await ejs.renderFile(templatePath, {
            ...data,
            page: templateName // usado para el estado activo del navbar
        });
        fs.writeFileSync(outputPath, html);
        console.log(`✅ Generado: ${outputName}`);
    } catch (err) {
        console.error(`❌ Error generando ${outputName}:`, err);
    }
}

async function build() {
    console.log('🚀 Iniciando proceso de construcción...');

    // 1. Copiar Archivos Públicos
    console.log('📂 Copiando archivos estáticos...');
    fs.cpSync(publicDir, distDir, { recursive: true });

    // 2. Construir Páginas
    console.log('📄 Construyendo páginas...');
    
    // Inicio
    await buildPage('index', 'index.html', { title: 'Inicio' });
    
    // Quién Soy
    await buildPage('about', 'about.html', { title: 'Quién Soy' });
    
    // Proyectos (Inyectar datos)
    await buildPage('projects', 'projects.html', { 
        title: 'Proyectos', 
        projects: projectsData 
    });
    
    // Contacto
    await buildPage('contact', 'contact.html', { title: 'Contacto' });

    console.log('✨ ¡Construcción completada! Directorio de salida: /dist');
}

build();
