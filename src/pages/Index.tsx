import RhinoFiWidget from "@/components/RhinoFiWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-paper-white flex flex-col">
      {/* Header with Logo */}
      <header className="pt-8 pb-6 text-center fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-handwritten text-ink-black">
          RapidGas
        </h1>
      </header>

      {/* Main Content - Widget */}
      <main className="flex-1 flex items-center justify-center px-4 fade-in-delay">
        <div className="w-full max-w-md">
          <RhinoFiWidget className="mx-auto" />
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 pt-6 text-center fade-in-delay-long">
        <p className="text-sm font-handwritten text-muted-foreground">
          ⚡ RapidGas — Powered by RhinoFi
        </p>
      </footer>
    </div>
  );
};

export default Index;
