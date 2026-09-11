import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/kodeblink-site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfolio Concepts — KODEBLINK" }, { name: "description", content: "Browse KODEBLINK concept projects for websites, applications, business software and manufacturing." },
    { property: "og:title", content: "KODEBLINK Portfolio Concepts" }, { property: "og:description", content: "Concepts built around useful work." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: PortfolioPage,
});