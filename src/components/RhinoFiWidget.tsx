Thank you. Seeing your existing code is perfect. It allows me to integrate the new theme URL seamlessly while preserving your custom styling like the sketch-border.

I have combined your component's structure with the new themed URL. This new code replaces the static URL with the dynamic one that includes all your "pen sketch" theme customizations.

Here is the complete, final replacement code for your src/components/RhinoFiWidget.tsx file.

Final Replacement Code for src/components/RhinoFiWidget.tsx

Action: Replace the entire content of src/components/RhinoFiWidget.tsx with this code.

code
Tsx
download
content_copy
expand_less

interface RhinoFiWidgetProps {
  className?: string;
}

const RhinoFiWidget = ({ className = "" }: RhinoFiWidgetProps) => {
  // 1. Your API Key.
  const apiKey = 'PUBLIC-42fce7be-c245-4966-824d-f5bef10f96d2';

  // 2. The JSON theme object for your "pen sketch" design.
  const theme = {
    colors: {
      widgetBackground: '#FFFFFF',      // Paper white background
      primary: '#000000',             // Ink black buttons
      primaryLight: '#222222',        // Dark gray for button hover
      select: '#F5F5F5',              // Light gray for input backgrounds
      textPrimary: '#000000',          // Ink black for main text
      textSecondary: '#666666',        // Muted gray for secondary text
      textPrimaryCta: '#FFFFFF',        // White text on top of black buttons
      stroke: '#333333'               // Dark sketch-gray for borders
    },
    radius: {
      widget: '0.75rem',              // Matching your site's border radius
      actionElements: '0.75rem',      // Matching your site's border radius
      tokenSelect: '0.75rem'          // Matching your site's border radius
    }
  };

  // 3. The theme object is stringified and URL-encoded.
  const encodedTheme = encodeURIComponent(JSON.stringify(theme));

  // 4. The final URL is constructed with your API key and custom theme.
  const widgetUrl = `https://widget.rhino.fi/?apiKey=${apiKey}&theme=${encodedTheme}`;
  
  return (
    // Your sketch-border container is preserved.
    <div className={`sketch-border relative ${className}`}>
      <iframe
        // The src is now the new dynamic URL with your theme.
        src={widgetUrl}
        // All your original classes and attributes are preserved.
        className="w-full h-[581px] border-none rounded-lg relative z-10 bg-background"
        scrolling="no"
        title="RhinoFi Bridge Widget"
        loading="lazy"
      />
    </div>
  );
};

export default RhinoFiWidget;

This updated code will now render the RhinoFi widget with a look and feel that is perfectly integrated with the rest of your site's design.
