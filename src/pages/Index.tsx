import RhinoFiWidget from "@/components/RhinoFiWidget";

const Index = () => {
  return (
    // THIS IS THE FIX: Removed 'min-h-screen' to allow the page to have natural height
    <div className="bg-paper-white flex flex-col">
      {/* Header with Logo + Text */}
      <header className="p-4 md:p-6 fade-in">
        <div className="flex items-center justify-start gap-x-2">
          <img
            src="/RapidGas.webp"
            alt="RapidGas Logo"
            className="h-8 md:h-9"
          />
          <h1 className="text-xl md:text-2xl font-medium font-handwritten text-ink-black">
            RapidGas
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 py-6 sm:py-8 fade-in-delay">
        {/* THIS IS THE FIX: Font size is now even smaller on mobile (text-lg) */}
        <h2 className="text-lg sm:text-2xl font-bold font-handwritten text-ink-black mb-4">
          ⚡ RapidGas — Gas Bridge
        </h2>
        {/* THIS IS THE FIX: Subtext is also smaller on mobile */}
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Swap, bridge, and top up your gas fees instantly across blockchains with RapidGas, a lightning-fast and secure interop solution.
        </p>
      </section>

      {/* Main Content - Widget */}
      <main className="flex justify-center px-4 pb-8 fade-in-delay-long">
        <div className="w-full max-w-md">
          <RhinoFiWidget className="mx-auto" />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 md:pt-6 md:pb-8 text-center fade-in-delay-long">
        <p className="text-sm font-handwritten text-muted-foreground">
          ⚡ RapidGas — By{" "}
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
