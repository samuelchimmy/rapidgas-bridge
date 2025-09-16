interface RhinoFiWidgetProps {
  className?: string;
}

const RhinoFiWidget = ({ className = "" }: RhinoFiWidgetProps) => {
  const apiKey = 'PUBLIC-42fce7be-c245-4966-824d-f5bef10f96d2';

  const theme = {
    colors: {
      // THIS IS THE FIX #1: The widget's internal background is now transparent.
      widgetBackground: 'transparent',
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
    <div className={`sketch-border relative ${className}`}>
      <div className="w-full h-[460px] sm:h-[540px] rounded-lg overflow-hidden relative z-10">
        <iframe
          src={widgetUrl}
          // THIS IS THE FIX #2: Removed 'bg-background' so the iframe element itself is transparent.
          className="w-full h-[500px] sm:h-[581px] border-none"
          scrolling="no"
          title="RhinoFi Bridge Widget"
        />
      </div>
    </div>
  );
};

export default RhinoFiWidget;
