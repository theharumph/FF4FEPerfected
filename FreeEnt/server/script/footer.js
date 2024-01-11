// This is a bit kludgey, but with a static site this is a way
// to share the footer across multiple pages.

var FOOTER_HTML = `
  <div id="footer">
    FF4FE Perfected, like Free Enterprise, is a labour-of-love fan project and is not affiliated
    in any way with Square Enix.
  </div>
  `;

document.write(FOOTER_HTML);
