import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/kodeblink-site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — KODEBLINK" },
      {
        name: "description",
        content:
          "Explore KODEBLINK services for websites, applications, business software and manufacturing.",
      },
      { property: "og:title", content: "KODEBLINK Services" },
      {
        property: "og:description",
        content: "Focused technology services for real business needs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});
