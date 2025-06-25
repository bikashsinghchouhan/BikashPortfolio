const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const outputFrame = document.getElementById('output');

function updatePreview() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}</script>`;
  
  const combinedCode = `
    ${html}
    ${css}
    ${js}
  `;
  
  const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(combinedCode);
  iframeDoc.close();
}

// Update preview on every keystroke
htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);

// Initial load
updatePreview();








// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Right-click is disabled!");
});

// Disable keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
    (e.ctrlKey && ["U", "S", "P", "C", "X", "V"].includes(e.key))
  ) {
    e.preventDefault();
    alert("This action is disabled!");
  }
});

// Disable copy, paste, cut
["copy", "paste", "cut"].forEach(eventType => {
  document.addEventListener(eventType, function (e) {
    e.preventDefault();
    alert(`${eventType.charAt(0).toUpperCase() + eventType.slice(1)} is disabled!`);
  });
});

