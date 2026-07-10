import { createFileRoute } from "@tanstack/react-router";
import portfolioHtml from "../portfolio.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(portfolioHtml as string, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});