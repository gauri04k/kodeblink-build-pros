import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/kodeblink-site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About KODEBLINK — Practical Technology" },
    { name: "description", content: "Learn how KODEBLINK combines design, engineering and business understanding." },
    { property: "og:title", content: "About KODEBLINK" }, { property: "og:description", content: "A practical approach to useful digital solutions." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});