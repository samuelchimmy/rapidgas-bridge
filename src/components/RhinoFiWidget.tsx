interface RhinoFiWidgetProps {
  className?: string;
}

const RhinoFiWidget = ({ className = "" }: RhinoFiWidgetProps) => {
  const apiKey = 'PUBLIC-42fce7be-c245-4966-824d-f5bef10f96d2';

  const theme = {
    colors: {
      widgetBackground: '#FFFFFF',
      primary: '#000000',
      primaryLight: '#222222',
      select: '#F5F5F5',
      textPrimary: '#000000',
      textSecondary: '#666666',
      textPrimaryCta: '#FFFFFF',
      stroke: '#333333'
    },
    radius: {
      widget: '0.75rem',
      actionElements: '0.75rem',
      tokenSelect: '0.75rem'
    }
  };

  const encodedTheme = encodeURIComponent(JSON.stringify(theme));
  const widgetUrl = `https://widget.rhino.fi/?apiKey=${apiKey}&theme=${encodedTheme}`;
  
  return (
    // Your original sketch-border container is preserved.
    <div className={`sketch-border relative ${className}`}>
      {/* 
        FIX: This is the new container that will clip the iframe.
        - It is shorter than the iframe itself (e.g., h-[460px] vs the iframe's 500px).
        - 'overflow-hidden' clips whatever part of the iframe sticks out.
        - 'rounded-lg' ensures the clipped corners look clean.
      */}
      <div className="w-full h-[480px] sm:h-[530px] rounded-lg overflow-hidden relative z-10">
        <iframe
          src={widgetUrl}
          // The iframe is now intentionally taller than its container.
          // Its bottom part, containing the footer, will be hidden.
          className="w-full h-[500px] sm:h-[581px] border-none"
          scrolling="no"
          title="RhinoFi Bridge Widget"
        />
      </div>
    </div>
  );
};

export default RhinoFiWidget;
