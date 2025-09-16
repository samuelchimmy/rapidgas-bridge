import RhinoFiWidget from "@/components/RhinoFiWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-paper-white flex flex-col">
      {/* Header with Logo + Text */}
      <header className="p-6 fade-in">
        <div className="flex items-center justify-start gap-x-2">
          <img
            src="/RapidGas.webp"
            alt="RapidGas Logo"
            className="h-8 md:h-10"
          />
          <h1 className="text-xl md:text-2xl font-medium font-handwritten text-ink-black">
            RapidGas
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 pt-8 pb-12 fade-in-delay">
        <h2 className="text-3xl md:text-4xl font-bold font-handwritten text-ink-black mb-4">
          ⚡ RapidGas — The Fastest Crypto Gas Bridge
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Swap, bridge, and top up your gas fees instantly across blockchains with RapidGas, a lightning-fast and secure solution powered by RhinoFi. Designed for simplicity, speed, and reliability, RapidGas makes cross-chain transactions seamless. No delays, no complexity — just pure efficiency.
        </p>
      </section>

      {/* Main Content - Widget */}
      <main className="flex-1 flex justify-center px-4 fade-in-delay-long">
        <div className="w-full max-w-md">
          <RhinoFiWidget className="mx-auto" />
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 pt-6 text-center fade-in-delay-long">
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
