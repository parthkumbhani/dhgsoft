const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\Parth Patel\\.gemini\\antigravity\\brain\\6cfaf5fc-c03e-47e5-ab69-e134735c6696\\.system_generated\\steps\\7453\\content.md', 'utf8');

console.log("=== HEADINGS AND LIST ITEMS ===");

// Regex to extract all h1, h2, h3, h4 tags
const headingRegex = /<(h[1-4]|span|p|div|li)\b[^>]*>([\s\S]*?)<\/\1>/gi;
let match;
while ((match = headingRegex.exec(html)) !== null) {
  let tag = match[1].toLowerCase();
  let text = match[2].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
  if (text.length > 5 && text.length < 500) {
    if (tag.startsWith('h')) {
      console.log(`[${tag.toUpperCase()}] ${text}`);
    } else if (text.includes("OPC") || text.includes("AVEVA") || text.includes("Productivity") || text.includes("Downtime") || text.includes("Reference Architecture") || text.includes("Related Capabilities") || text.includes("Technology Ecosystem")) {
      console.log(`[${tag.toUpperCase()}] ${text}`);
    }
  }
}
