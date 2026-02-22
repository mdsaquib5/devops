// Critical CSS extraction utility
// This identifies above-the-fold critical styles for immediate rendering

export const getCriticalCSS = () => {
  return `
    /* Critical reset and base styles */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Critical layout styles */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Critical header styles */
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    /* Critical main content spacing */
    main {
      margin-top: 80px;
      min-height: calc(100vh - 80px);
    }
    
    /* Critical button styles */
    button {
      cursor: pointer;
      border: none;
      background: none;
      font-family: inherit;
    }
    
    /* Screen reader only */
    .sr-only {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }
  `;
};

export default getCriticalCSS;
