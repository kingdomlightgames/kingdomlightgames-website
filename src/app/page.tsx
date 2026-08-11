import ContactForm from "./components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const journeyItems = [
  {
    number: "01",
    title: "Build the Business",
    text: "Follow the real process of sourcing inventory, listing products, shipping orders, and reinvesting profits.",
  },
  {
    number: "02",
    title: "Share the Lessons",
    text: "See the wins, mistakes, pricing decisions, and practical lessons that come with growing a TCG business.",
  },
  {
    number: "03",
    title: "Serve the Community",
    text: "Create a trusted place for players and collectors to find cards, follow the journey, and connect with the brand.",
  },
];

const inventoryItems = [
  {
    category: "Magic: The Gathering",
    title: "Singles and Commander Staples",
    text: "Browse cards for Commander decks, collections, upgrades, and everyday play.",
    href: "https://manapool.com/shop/kingdomlightgames",
    linkText: "Shop on ManaPool",
  },
  {
    category: "Trading Cards",
    title: "Bundles, Lots, and Featured Listings",
    text: "Explore selected products, card lots, sealed items, and rotating inventory.",
    href: "https://www.ebay.com/usr/kingdomlightgames",
    linkText: "Browse eBay",
  },
 {
  category: "Collections",
  title: "Selling a Collection?",
  text: "Kingdom Light Games is interested in purchasing Magic and Pokémon collections as inventory grows.",
  href: "mailto:sales@kingdomlightgames.com",
  linkText: "Get in Touch",
},
];

const businessStats = [
  {
    value: "Day 1",
    label: "Documenting the journey",
  },
  {
    value: "100%",
    label: "Transparent growth",
  },
  {
    value: "Online",
    label: "Inventory available",
  },
  {
    value: "Growing",
    label: "One collection at a time",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-neutral-950">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Kingdom Light Games home"
          >
            <Image
              src="/KingdomLight Games.png"
              alt="Kingdom Light Games logo"
              width={46}
              height={46}
              priority
              className="h-11 w-11 object-contain"
            />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                Kingdom Light
              </p>
              <p className="text-xs uppercase tracking-[0.36em] text-[#a57c19]">
                Games
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a
              href="#journey"
              className="transition-colors hover:text-[#a57c19]"
            >
              Journey
            </a>

            <a
              href="#shop"
              className="transition-colors hover:text-[#a57c19]"
            >
              Shop
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-[#a57c19]"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-[#a57c19]"
            >
              Contact
            </a>
          </nav>

          <a
            href="https://manapool.com/shop/kingdomlightgames"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#a57c19]"
          >
            Shop Cards
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#d7b758]/20 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-neutral-200/60 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.42em] text-[#a57c19]">
              A Trading Card Business in the Making
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
              We are more
              <br />
              than a card store.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              Kingdom Light Games documents the real journey of building an
              online trading card business from the ground up—one collection,
              one order, and one lesson at a time.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://manapool.com/shop/kingdomlightgames"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a57c19]"
              >
                Shop on ManaPool
              </a>

              <a
                href="https://www.youtube.com/@KingdomLightGames"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950"
              >
                Watch the Journey
              </a>
            </div>

            <div className="mt-14 flex items-center gap-5 border-t border-neutral-200 pt-7">
              <span className="h-px w-12 bg-[#a57c19]" />

              <p className="max-w-md text-sm leading-6 text-neutral-500">
                Built for players, collectors, entrepreneurs, and anyone curious
                about what it takes to grow a TCG business.
              </p>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
            <div className="absolute h-[82%] w-[82%] rounded-full border border-[#a57c19]/25" />
            <div className="absolute h-[66%] w-[66%] rounded-full border border-neutral-200" />
            <div className="absolute h-[48%] w-[48%] rounded-full bg-[#d7b758]/10 blur-2xl" />

            <div className="relative flex aspect-square w-full items-center justify-center rounded-[2.5rem] border border-neutral-200 bg-white/75 p-10 shadow-[0_30px_100px_rgba(0,0,0,0.10)] backdrop-blur">
              <Image
                src="/KingdomLight Games.png"
                alt="Kingdom Light Games logo"
                width={500}
                height={500}
                priority
                className="h-auto w-full max-w-sm object-contain"
              />

              <div className="absolute bottom-6 left-6 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 shadow-sm">
                Est. 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Snapshot */}
      <section className="border-y border-neutral-200 bg-[#faf9f6]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {businessStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-9 sm:px-7 ${
                index < businessStats.length - 1
                  ? "border-r border-neutral-200"
                  : ""
              }`}
            >
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm leading-5 text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section
        id="journey"
        className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36"
      >
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a57c19]">
              The Journey
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Honest progress.
              <br />
              Real numbers.
              <br />
              Better decisions.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-neutral-600">
              The goal is not to pretend the business became successful
              overnight. It is to show what happens as it grows.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {journeyItems.map((item) => (
              <article
                key={item.number}
                className="grid gap-6 py-10 sm:grid-cols-[90px_1fr] sm:py-14"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-[#a57c19]">
                  {item.number}
                </p>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="bg-neutral-950 py-28 text-white lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#d7b758]">
                Shop Inventory
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Cards selected for players, collectors, and deck builders.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-neutral-400">
              Inventory is currently available through trusted marketplaces
              while Kingdom Light Games continues to grow.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-3">
            {inventoryItems.map((item) => (
              <article
                key={item.title}
                className="group flex min-h-[390px] flex-col justify-between bg-neutral-950 p-8 transition duration-300 hover:bg-neutral-900 sm:p-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7b758]">
                    {item.category}
                  </p>

                  <h3 className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-7 text-neutral-400">
                    {item.text}
                  </p>
                </div>

                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="mt-10 flex items-center justify-between border-t border-white/15 pt-6 text-sm font-semibold"
                >
                  <span>{item.linkText}</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="flex w-full justify-center border-t border-neutral-800 bg-black px-6 py-20 text-white"
      >
        <div className="grid w-full max-w-5xl items-center gap-12 sm:grid-cols-2">
          <div className="space-y-5">
            <Image
              src="/KingdomLight Games.png"
              alt="Kingdom Light Games logo"
              width={140}
              height={140}
              className="rounded-md shadow-[0_0_40px_rgba(255,255,255,0.06)]"
            />

            <p className="max-w-md text-xs uppercase leading-6 tracking-wide text-neutral-400">
              An online TCG business being built openly, thoughtfully, and one
              step at a time.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              About the Brand
            </h2>

            <h3 className="text-2xl font-semibold text-neutral-100">
              A place to shop, learn, and follow the story.
            </h3>

            <p className="text-sm leading-relaxed text-neutral-400">
              Kingdom Light Games is focused on trading cards, online
              entrepreneurship, transparent growth, and building something that
              can serve players and collectors for years to come.
            </p>

            <p className="text-sm leading-relaxed text-neutral-400">
              The website brings together inventory, YouTube updates, business
              progress, and future resources under one recognizable brand.
            </p>

            <a
              href="https://www.youtube.com/@KingdomLightGames"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs uppercase tracking-wide text-neutral-300 transition-colors hover:text-white"
            >
              Follow on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
     {/* Contact CTA */}
<section id="contact" className="px-5 py-8 sm:px-8">
  <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#d7b758] px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-black/60">
          Get in Touch
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-6xl">
          Questions, orders, or a collection to sell?
        </h2>

        <p className="mt-6 max-w-lg text-base leading-7 text-black/65">
          Send a message using the form, and Kingdom Light Games will respond
          as soon as possible.
        </p>

        <p className="mt-6 max-w-lg text-sm leading-6 text-black/55">
          Use the form for order questions, collection offers, business
          inquiries, or general questions.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 shadow-sm backdrop-blur sm:p-8">
        <ContactForm />
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-neutral-200 pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/KingdomLight Games.png"
              alt="Kingdom Light Games logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />

            <div>
              <p className="text-sm font-semibold">Kingdom Light Games</p>
              <p className="mt-1 text-xs text-neutral-500">
                One collection at a time.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-neutral-600">
            <a
              href="https://manapool.com/shop/kingdomlightgames"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#a57c19]"
            >
              ManaPool
            </a>

            <a
              href="https://www.ebay.com/usr/kingdomlightgames"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#a57c19]"
            >
              eBay
            </a>

            <a
              href="https://www.youtube.com/@KingdomLightGames"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#a57c19]"
            >
              YouTube
            </a>
          </div>

          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Kingdom Light Games
          </p>
        </div>
      </footer>
    </main>
  );
}