import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/kodeblink-site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KODEBLINK — Start a Project" },
      {
        name: "description",
        content: "Tell KODEBLINK what you want to build through the project request form.",
      },
      { property: "og:title", content: "Contact KODEBLINK" },
      { property: "og:description", content: "Let's build something that matters." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
