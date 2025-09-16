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
    <div className={`sketch-border relative ${className}`}>
      <iframe
        src={widgetUrl}
        // FIX #1 & #3: Height is now responsive, and loading="lazy" is removed.
        className="w-full h-[500px] sm:h-[581px] border-none rounded-lg relative z-10 bg-background"
        scrolling="no"
        title="RhinoFi Bridge Widget"
      />
    </div>
  );
};

export default RhinoFiWidget;
