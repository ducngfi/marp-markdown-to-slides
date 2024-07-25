const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read the markdown file
const markdownFile = 'slides.md';
const markdownContent = fs.readFileSync(markdownFile, 'utf-8');

// Extract the global front matter (theme and style declaration)
const frontMatterMatch = markdownContent.match(/---\nmarp: true\n[\s\S]*?\n---/);
const frontMatter = frontMatterMatch ? frontMatterMatch[0] : '';

// Remove the global front matter from the markdown content
const cleanedContent = markdownContent.replace(frontMatter, '').trim();

// Split the content into individual slides
const slides = cleanedContent.split(/\n---\n/).filter(slide => slide.trim() !== '');

// Ensure the output directory exists
const outputDir = 'images';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Path to the CSS file
const cssFile = 'slides.css';

// Process each slide
slides.forEach((slide, index) => {
    const slideContent = `${frontMatter}\n${slide.trim()}\n`;
    const slideFile = path.join(outputDir, `slide-${String(index + 1).padStart(3, '0')}.md`);
    fs.writeFileSync(slideFile, slideContent);

    const outputImage = path.join(outputDir, `slide-${String(index + 1).padStart(3, '0')}.png`);
    const command = `npx @marp-team/marp-cli@latest ${slideFile} --image --output ${outputImage} --theme ${cssFile}`;

    try {
        execSync(command, { stdio: 'inherit' });
        console.log(`Slide ${index + 1} converted to image.`);
    } catch (error) {
        console.error(`Error generating image for slide ${index + 1}:`, error);
    } finally {
        // Delete the temporary slide file
        fs.unlinkSync(slideFile);
    }
});
