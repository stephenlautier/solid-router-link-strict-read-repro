import { HydrationScript } from "@solidjs/web";
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/solid-router";
import { For } from "solid-js";

const items = [{ label: "About", linkOptions: { to: "/about" } }];

export const Route = createRootRoute({
	component: () => (
		<html>
			<head>
				<HydrationScript />
				<HeadContent />
			</head>
			<body>
				<For each={items}>{item => <Link {...(item.linkOptions as any)}>{item.label}</Link>}</For>
				<Outlet />
				<Scripts />
			</body>
		</html>
	),
});
