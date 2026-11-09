import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({ component: () => <h1>Home</h1> });
