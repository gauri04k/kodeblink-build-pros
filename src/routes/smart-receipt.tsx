import { createFileRoute } from "@tanstack/react-router";
import { SmartReceiptPage } from "@/components/kodeblink-site";

export const Route = createFileRoute("/smart-receipt")({
  head: () => ({ meta: [
    { title: "SmartReceipt — KODEBLINK" }, { name: "description", content: "Explore the KODEBLINK SmartReceipt product direction and placeholder preview." },
    { property: "og:title", content: "KodeBlink SmartReceipt" }, { property: "og:description", content: "A product direction for simpler receipt information management." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: SmartReceiptPage,
});