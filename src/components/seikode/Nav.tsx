import logo from "@/assets/seikode-logo.png";

const WHATSAPP_URL = `https://wa.me/5527998346547?text=${encodeURIComponent("Oi! Tô interessado em um site. Pode me passar mais detalhes?")}`;

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-5 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between glass rounded-full px-5 py-3 md:px-7 md:py-3.5">
        <a href="#top" className="relative flex items-center">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/30 blur-2xl"
          />
          <img
            src={logo.src}
            alt="SEIKODE"
            className="h-[50px] w-auto max-h-[50px] object-contain drop-shadow-[0_0_20px_color-mix(in_oklab,var(--gold)_60%,transparent)]"
          />
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <a href="#efeito" className="transition hover:text-foreground">O problema</a>
          <a href="#prova" className="transition hover:text-foreground">Benefícios</a>
          <a href="#features" className="transition hover:text-foreground">Método</a>
          <a href="#investir" className="transition hover:text-foreground">Começar</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-foreground transition hover:bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] md:text-xs"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
