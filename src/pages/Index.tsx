import RhinoFiWidget from "@/components/RhinoFiWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-paper-white flex flex-col">
      {/* Header with Logo */}
      <header className="p-6 fade-in">
        <h1 className="text-xl md:text-2xl font-medium font-handwritten text-ink-black">
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
          ⚡ RapidGas — Built With ❤️ By{" "}
          <a 
            href="https://www.0xnotes.lol/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ink-black hover:underline transition-all duration-200"
          >
            Jadeofwallstreet
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
