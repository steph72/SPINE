// Find all matching SVG elements and replace them with a Unicode character
document.querySelectorAll("svg#spon-twitter-xl").forEach((svg) => {
  // Create a replacement span element
  const replacement = document.createElement("span");
  replacement.textContent = "\u5350"; // Unicode character U+5350
  replacement.style.fontSize = "28px"; // Match the size of the SVG
  replacement.style.display = "inline-block"; // Align properly with text
  svg.parentNode.replaceChild(replacement, svg); // Replace the SVG
});

