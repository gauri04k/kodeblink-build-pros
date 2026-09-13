import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Menu, X } from "lucide-react";
import { z } from "zod";

import logoAsset from "@/assets/kodeblink-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  buildCapabilities,
  portfolio,
  processSteps,
  services,
  site,
  solutions,
} from "@/lib/site-config";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" aria-label="KODEBLINK home" className="focus-ring flex min-w-0 items-center gap-3">
      <img
        src={logoAsset.url}
        alt="KODEBLINK official logo"
        className={
          compact
            ? "h-10 w-10 shrink-0 rounded-sm object-cover"
            : "h-12 w-12 shrink-0 rounded-sm object-cover"
        }
      />
      {!compact && (
        <span className="min-w-0">
          <span className="block truncate font-display text-lg font-semibold tracking-tight text-brand-light">
            KODEBLINK
          </span>
          <span className="block truncate font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            Custom Design Company
          </span>
        </span>
      )}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-brand-black/90 backdrop-blur-md">
      <div className="section-shell grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {site.navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-brand-mint" }}
              className="focus-ring text-sm font-medium text-muted-foreground transition-colors hover:text-brand-mint"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="mint" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Start a Project</Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="text-brand-light hover:bg-brand-surface hover:text-brand-mint lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-brand-dark px-6 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {site.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={close}
                className="focus-ring border-b border-border py-3 text-sm font-medium text-muted-foreground hover:text-brand-mint"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="mint" className="mt-4 w-full">
              <Link to="/contact" onClick={close}>
                Start a Project
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-dark">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo compact />
          <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
            Custom design and technology built around the way your business works.
          </p>
          <div className="mt-6 flex gap-5 text-sm">
            <a
              className="focus-ring text-muted-foreground hover:text-brand-mint"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="focus-ring text-muted-foreground hover:text-brand-mint"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Navigation
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            {site.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="focus-ring w-fit text-muted-foreground hover:text-brand-mint"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Connect
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            <a
              className="focus-ring break-all text-muted-foreground hover:text-brand-mint"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <a
              className="focus-ring text-muted-foreground hover:text-brand-mint"
              href={site.phoneHref}
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="section-shell flex flex-col gap-3 py-5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 KODEBLINK. All rights reserved.</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function PageIntro({
  eyebrow = "KODEBLINK",
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-grid border-b border-border">
      <div className="section-shell py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-brand-light md:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">{eyebrow}</p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl ${light ? "text-brand-light" : "text-brand-light"}`}
      >
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-7 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function CtaSection({
  title = "Have an Idea? Let's Build It.",
  text = "Tell us what you're trying to build and let's discuss how technology can help.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-border bg-brand-dark py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-brand-light md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="mint" size="lg">
            <Link to="/contact">
              Start a Project <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-sm border border-border bg-brand-surface p-4 shadow-2xl shadow-brand-black/30">
      <div className="dashboard-grid absolute inset-0 opacity-50" />
      <div className="relative flex items-center justify-between border-b border-border pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          KODEBLINK / SYSTEM
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase text-brand-mint">
          <span className="h-2 w-2 rounded-full bg-brand-mint" />
          Active
        </span>
      </div>
      <div className="relative mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-sm border border-border bg-brand-black/60 p-4">
          <span className="font-mono text-[10px] uppercase text-muted-foreground">Workflow</span>
          <span className="mt-2 block text-xl font-semibold text-brand-light">Connected</span>
        </div>
        <div className="rounded-sm border border-border bg-brand-black/60 p-4">
          <span className="font-mono text-[10px] uppercase text-muted-foreground">Interface</span>
          <span className="mt-2 block text-xl font-semibold text-brand-light">Focused</span>
        </div>
      </div>
      <div className="relative mt-3 rounded-sm border border-border bg-brand-black/60 p-4">
        <div className="flex items-end gap-2">
          <span className="font-mono text-[10px] uppercase text-muted-foreground">
            Business flow
          </span>
          <span className="ml-auto font-mono text-[10px] text-brand-mint">01 — 04</span>
        </div>
        <div className="mt-5 flex h-28 items-end gap-2">
          {[35, 58, 46, 76, 64, 88, 74, 96].map((height, index) => (
            <span
              key={index}
              className="flex-1 bg-brand-mint/70"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-3 flex items-center gap-2 border-t border-border pt-4 font-mono text-[10px] uppercase text-muted-foreground">
        <span className="h-2 w-2 bg-brand-mint" />
        Built around your business
      </div>
    </div>
  );
}

function ManufacturingVisual() {
  return (
    <div className="rounded-sm border border-border bg-brand-black p-5">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Operations / Overview
        </span>
        <span className="font-mono text-[10px] text-brand-mint">Demo layout</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["Production", "Inventory", "Orders", "Quality"].map((item) => (
          <div key={item} className="border border-border bg-brand-surface p-3">
            <span className="block font-mono text-[9px] uppercase text-muted-foreground">
              {item}
            </span>
            <span className="mt-3 block h-2 w-3/4 bg-brand-mint/70" />
          </div>
        ))}
      </div>
      <div className="dashboard-grid mt-4 h-44 border border-border p-4">
        <div className="flex h-full items-end gap-2">
          {[42, 62, 48, 72, 58, 81, 69, 90, 78, 95].map((height, index) => (
            <span
              key={index}
              className="w-full bg-brand-mint/60"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <SiteFrame>
      <main>
        <section className="page-grid overflow-hidden border-b border-border">
          <div className="section-shell grid gap-14 py-20 md:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-20">
            <div className="reveal-up">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">
                {site.positioning}
              </p>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-brand-light md:text-7xl">
                Technology Built Around Your Business.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                KODEBLINK designs and builds custom websites, business applications and technology
                solutions around the way your business works.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild variant="mint" size="lg">
                  <Link to="/contact">
                    Start a Project <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="reveal-up lg:pt-10">
              <HeroVisual />
            </div>
          </div>
        </section>
        <section className="bg-brand-dark py-20 md:py-24">
          <div className="section-shell">
            <SectionTitle
              title="What We Build"
              text="Focused digital products for the work your business needs to do."
            />
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {buildCapabilities.map((item) => (
                <article
                  key={item.number}
                  className="bg-brand-dark p-7 transition-colors hover:bg-brand-surface"
                >
                  <span className="font-mono text-xs text-brand-mint">{item.number}</span>
                  <h3 className="mt-8 text-lg font-medium uppercase text-brand-light">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionTitle
                title="Technology for Modern Manufacturing."
                text="Connect production, inventory and business operations through technology designed around your workflow."
              />
              <Button asChild variant="link-mint" className="mt-8 px-0">
                <Link to="/solutions">
                  Explore Manufacturing Solutions <ChevronRight />
                </Link>
              </Button>
            </div>
            <ManufacturingVisual />
          </div>
        </section>
        <section className="bg-brand-mint py-20 text-brand-black md:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">
                Product focus
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Meet KodeBlink SmartReceipt.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 opacity-80">
                A clean product direction for managing digital receipt information. Product details
                are being finalized.
              </p>
            </div>
            <Button asChild variant="dark" size="lg">
              <Link to="/smart-receipt">
                Explore SmartReceipt <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
        <section className="py-20 md:py-28">
          <div className="section-shell">
            <SectionTitle title="Simple Process. Clear Results." />
            <div className="mt-14 grid gap-10 md:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.number} className="border-t border-border pt-5">
                  <span className="font-mono text-3xl text-brand-mint/60">{step.number}</span>
                  <h3 className="mt-7 font-medium uppercase text-brand-light">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-border py-20 md:py-28">
          <div className="section-shell">
            <SectionTitle
              title="Why KODEBLINK"
              text="A practical approach to building technology that people can use."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                ["Built Around Your Business", "Technology should adapt to the business."],
                [
                  "Simple User Experience",
                  "We focus on interfaces that are easy to understand and use.",
                ],
                [
                  "Practical Technology",
                  "We choose technology based on the actual business requirement.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="border-l-2 border-brand-mint pl-5">
                  <h3 className="font-medium uppercase text-brand-light">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="About KODEBLINK"
          title="Technology should make complex work feel simpler."
          text="KODEBLINK combines design, engineering and business understanding to create practical digital solutions."
        />
        <section className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionTitle
              title="Who We Are"
              text="KODEBLINK is a custom design and technology company. We build websites, business applications and systems around the way organizations work."
            />
          </div>
          <div className="grid gap-10">
            <div>
              <h2 className="text-xl font-medium text-brand-light">What We Believe</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Good technology is clear, useful and connected to a real business need.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-brand-light">Our Approach</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                We start with understanding, then design and build only what helps move the work
                forward.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-brand-dark py-20 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Direction"
                title="Vision"
                text="To become a trusted technology partner for organizations by creating digital products and business systems that make complex operations simpler, smarter and more connected."
              />
            </div>
            <div>
              <SectionTitle
                eyebrow="Purpose"
                title="Mission"
                text="To combine design, engineering and business understanding to build practical, scalable and meaningful digital solutions for organizations across industries."
              />
            </div>
          </div>
        </section>
        <section className="section-shell py-20 md:py-28">
          <SectionTitle title="Core Values" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Customer First",
              "Quality",
              "Transparency",
              "Ownership",
              "Continuous Improvement",
            ].map((value) => (
              <div key={value} className="border border-border p-5 text-sm text-brand-light">
                <Check className="mb-6 text-brand-mint" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>
        <CtaSection title="Build with clarity." text="Tell us what your business needs next." />
      </main>
    </SiteFrame>
  );
}

export function ServicesPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Services"
          title="The right level of technology for the work ahead."
          text="Choose a focused service or combine the pieces into a system designed around your business."
        />
        <section className="section-shell grid gap-px bg-border py-20 md:grid-cols-2 md:py-28 lg:grid-cols-3">
          {services.map(([title, whatLabel, what, howLabel, how]) => (
            <article key={title} className="bg-brand-black p-7 ring-1 ring-border">
              <h2 className="text-xl font-medium text-brand-light">{title}</h2>
              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-mint">
                {whatLabel}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{what}</p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-mint">
                {howLabel}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{how}</p>
              <Link
                to="/contact"
                className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand-mint hover:text-brand-light"
              >
                Discuss this service <ArrowRight />
              </Link>
            </article>
          ))}
        </section>
        <CtaSection />
      </main>
    </SiteFrame>
  );
}

export function SolutionsPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Solutions"
          title="Business outcomes first. Technology second."
          text="We help organizations connect important work without adding unnecessary complexity."
        />
        <section className="section-shell grid gap-8 py-20 md:grid-cols-2 md:py-28">
          {solutions.map(([title, problem, solution, benefit]) => (
            <article
              key={title}
              className="border border-border p-7 transition-colors hover:border-brand-mint/50"
            >
              <h2 className="text-xl font-medium text-brand-light">{title}</h2>
              <div className="mt-8 grid gap-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-mint">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{solution}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Benefit
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{benefit}</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand-mint hover:text-brand-light"
              >
                Explore this outcome <ArrowRight />
              </Link>
            </article>
          ))}
        </section>
        <CtaSection
          title="Let's solve the right problem."
          text="Share the workflow you want to improve."
        />
      </main>
    </SiteFrame>
  );
}

export function SmartReceiptPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Product"
          title="KodeBlink SmartReceipt"
          text="A dedicated product direction for a simpler way to manage receipt information."
        />
        <section className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <SectionTitle
              title="What is SmartReceipt?"
              text="SmartReceipt is a KODEBLINK product concept focused on making receipt information easier to organize and access. Exact product details are being finalized."
            />
            <Button asChild variant="mint" size="lg" className="mt-8">
              <Link to="/contact">
                Discuss SmartReceipt <ArrowRight />
              </Link>
            </Button>
          </div>
          <ProductPreview />
        </section>
        <section className="bg-brand-dark py-20 md:py-28">
          <div className="section-shell">
            <SectionTitle
              title="Key Features"
              text="Product specifications will be added here as they are confirmed."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                "Feature detail placeholder",
                "Workflow detail placeholder",
                "Integration detail placeholder",
              ].map((item) => (
                <div key={item} className="border border-border p-6">
                  <span className="font-mono text-xs text-brand-mint">TBD</span>
                  <p className="mt-5 text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-3">
          <div>
            <SectionTitle
              title="How It Works"
              text="The final workflow will be documented once the product specification is complete."
            />
          </div>
          <div>
            <SectionTitle
              title="Who It Is For"
              text="Organizations that want a clearer, more organized way to handle receipt information."
            />
          </div>
          <div>
            <SectionTitle
              title="Product Preview"
              text="The interface shown is a visual demo direction, not a live product."
            />
          </div>
        </section>
        <CtaSection
          title="Interested in SmartReceipt?"
          text="Share what you need the product to help with."
        />
      </main>
    </SiteFrame>
  );
}

function ProductPreview() {
  return (
    <div className="rounded-sm border border-border bg-brand-surface p-4">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          SmartReceipt / Demo
        </span>
        <span className="font-mono text-[10px] text-brand-mint">Placeholder</span>
      </div>
      <div className="mt-5 space-y-3">
        {["Receipt record", "Business category", "Transaction detail"].map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between border border-border bg-brand-black/50 p-4"
          >
            <div>
              <p className="font-mono text-[9px] uppercase text-muted-foreground">{item}</p>
              <span className="mt-2 block h-2 w-24 bg-brand-mint/60" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
        Demo content — not final product functionality
      </p>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Portfolio"
          title="Concepts built around useful work."
          text="A selection of KODEBLINK concept projects. These are design and product directions, not client work."
        />
        <section className="section-shell grid gap-5 py-20 md:grid-cols-2 md:py-28 lg:grid-cols-3">
          {portfolio.map(([category, label, title, text], index) => (
            <article
              key={title}
              className={`${index === 0 ? "md:col-span-2 lg:col-span-2" : ""} group overflow-hidden border border-border`}
            >
              <div className="dashboard-grid flex aspect-[16/9] items-end bg-brand-surface p-5">
                <div className="w-full">
                  <div className="mb-4 flex items-end gap-1">
                    {[40, 60, 48, 72, 54, 86, 65].map((height, i) => (
                      <span
                        key={i}
                        className="h-20 flex-1 bg-brand-mint/60"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between font-mono text-[9px] uppercase text-muted-foreground">
                    <span>{category}</span>
                    <span>Concept 0{index + 1}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-mint">
                  {label}
                </p>
                <h2 className="mt-3 text-xl font-medium text-brand-light">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </section>
        <CtaSection
          title="Have a project in mind?"
          text="Let's shape the right digital experience for it."
        />
      </main>
    </SiteFrame>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  company: z.string().trim().max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z.string().trim().max(30),
  project: z.string().trim().min(1, "Please tell us what you want to build.").max(200),
  message: z.string().trim().min(1, "Please add a short message.").max(2000),
});
type ContactValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  return (
    <SiteFrame>
      <main>
        <PageIntro
          eyebrow="Contact"
          title="Let's Build Something That Matters."
          text="Tell us what you are trying to build and let's discuss how technology can help."
        />
        <section className="section-shell grid gap-16 py-20 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <SectionTitle
              title="Start the conversation"
              text="Share a little about your idea, workflow or business need. We will use it to understand where KODEBLINK can help."
            />
            <div className="mt-10 grid gap-5 text-sm">
              <a
                className="focus-ring w-fit text-brand-light hover:text-brand-mint"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <a
                className="focus-ring w-fit text-brand-light hover:text-brand-mint"
                href={site.phoneHref}
              >
                {site.phone}
              </a>
              <a
                className="focus-ring w-fit text-brand-light hover:text-brand-mint"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </SiteFrame>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [values, setValues] = useState<ContactValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const update = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof ContactValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactValues;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }
    setStatus("success");
  };
  if (status === "success")
    return (
      <div role="status" className="border border-brand-mint/50 bg-brand-mint/10 p-8">
        <Check className="text-brand-mint" />
        <h2 className="mt-6 text-2xl font-medium text-brand-light">Thank you!</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
          Your project request has been received. Our team will get back to you shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setValues({ name: "", company: "", email: "", phone: "", project: "", message: "" });
          }}
        >
          Send another request
        </Button>
      </div>
    );
  const field = (name: keyof ContactValues, label: string, type = "text", required = false) => (
    <label className="grid gap-2 text-sm text-brand-light">
      {label}
      {required && <span className="text-brand-mint"> *</span>}
      <input
        type={type}
        value={values[name]}
        onChange={(event) => update(name, event.target.value)}
        className="focus-ring h-12 border border-border bg-brand-surface px-4 text-brand-light outline-none placeholder:text-muted-foreground"
        aria-invalid={Boolean(errors[name])}
      />
      {errors[name] && <span className="text-xs text-destructive">{errors[name]}</span>}
    </label>
  );
  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid gap-6 border border-border bg-brand-dark p-6 md:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {field("name", "Name", "text", true)}
        {field("company", "Company")}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {field("email", "Email", "email", true)}
        {field("phone", "Phone", "tel")}
      </div>
      {field("project", "What do you want to build?", "text", true)}
      <label className="grid gap-2 text-sm text-brand-light">
        Message<span className="text-brand-mint"> *</span>
        <textarea
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="focus-ring min-h-36 resize-y border border-border bg-brand-surface px-4 py-3 text-brand-light outline-none placeholder:text-muted-foreground"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
      </label>
      <Button type="submit" variant="mint" size="lg" className="w-fit">
        Send Project Request <ArrowRight />
      </Button>
    </form>
  );
}
