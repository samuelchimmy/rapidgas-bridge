interface RhinoFiWidgetProps {
  className?: string;
}

const RhinoFiWidget = ({ className = "" }: RhinoFiWidgetProps) => {
  return (
    <div className={`sketch-border relative ${className}`}>
      <iframe
        src="https://widget.rhino.fi/?apiKey=PUBLIC-42fce7be-c245-4966-824d-f5bef10f96d2"
        className="w-full h-[581px] border-none rounded-lg relative z-10 bg-background"
        scrolling="no"
        title="RhinoFi Bridge Widget"
        loading="lazy"
      />
    </div>
  );
};

export default RhinoFiWidget;