import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/kodeblink-site";

export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: [
    { title: "Business Solutions — KODEBLINK" }, { name: "description", content: "Business-focused CRM, HRMS, ERP, inventory and manufacturing solutions from KODEBLINK." },
    { property: "og:title", content: "KODEBLINK Business Solutions" }, { property: "og:description", content: "Business outcomes first. Technology second." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: SolutionsPage,
});