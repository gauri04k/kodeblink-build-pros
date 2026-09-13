import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/kodeblink-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KODEBLINK — Technology Built Around Your Business" },
      {
        name: "description",
        content:
          "KODEBLINK designs and builds custom websites, business applications and manufacturing technology.",
      },
      { property: "og:title", content: "KODEBLINK — Technology Built Around Your Business" },
      {
        property: "og:description",
        content: "Custom design and technology built around your business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
