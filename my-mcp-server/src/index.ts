import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/** eslint-disable-next-line @typescript-eslint/no-explicit-any */
// Base URL for the registry - will be the deployed Next.js app
const REGISTRY_BASE_URL = "https://registry-starter.vercel.app";

// Define our MCP agent with registry tools
export class MyMCP extends McpAgent {
	server = new McpServer({
		name: "shadcn Registry Server",
		version: "1.0.0",
	});

	async init() {
		// Tool to list all available components
		this.server.tool(
			"list_components",
			{
				type: z.enum(["registry:ui", "registry:component", "registry:block", "registry:theme", "registry:lib"]).optional().describe("Filter by component type"),
			},
			async ({ type }) => {
				try {
					const response = await fetch(`${REGISTRY_BASE_URL}/r/registry.json`);
					if (!response.ok) {
						return {
							content: [{
								type: "text",
								text: `Error fetching registry: HTTP ${response.status}`
							}],
						};
					}

					const registry = await response.json();
					let items = (registry as any).items || [];

					// Filter by type if specified
					if (type) {
						items = items.filter((item: any) => item.type === type);
					}

					const componentList = items.map((item: any) => ({
						name: item.name,
						type: item.type,
						title: item.title,
						description: item.description,
					}));

					return {
						content: [{
							type: "text",
							text: JSON.stringify(componentList, null, 2)
						}],
					};
				} catch (error) {
					return {
						content: [{
							type: "text",
							text: `Error fetching registry: ${error instanceof Error ? error.message : String(error)}`
						}],
					};
				}
			}
		);

		// Tool to get details for a specific component
		this.server.tool(
			"get_component",
			{
				name: z.string().describe("The name of the component (e.g., 'button', 'select', 'card')"),
			},
			async ({ name }) => {
				try {
					const response = await fetch(`${REGISTRY_BASE_URL}/r/${name}.json`);

					if (!response.ok) {
						return {
							content: [{
								type: "text",
								text: `Component '${name}' not found (HTTP ${response.status})`
							}],
						};
					}

					const componentData = await response.json();

					return {
						content: [{
							type: "text",
							text: JSON.stringify(componentData, null, 2)
						}],
					};
				} catch (error) {
					return {
						content: [{
							type: "text",
							text: `Error fetching component: ${error instanceof Error ? error.message : String(error)}`
						}],
					};
				}
			}
		);

		// Tool to search components by keyword
		this.server.tool(
			"search_components",
			{
				query: z.string().describe("Search query to find components by name, title, or description"),
			},
			async ({ query }) => {
				try {
					const response = await fetch(`${REGISTRY_BASE_URL}/r/registry.json`);
					if (!response.ok) {
						return {
							content: [{
								type: "text",
								text: `Error fetching registry: HTTP ${response.status}`
							}],
						};
					}

					const registry = await response.json();
					const queryLower = query.toLowerCase();
					const results = ((registry as any).items || []).filter((item: any) =>
						item.name?.toLowerCase().includes(queryLower) ||
						item.title?.toLowerCase().includes(queryLower) ||
						item.description?.toLowerCase().includes(queryLower)
					);

					return {
						content: [{
							type: "text",
							text: JSON.stringify(results, null, 2)
						}],
					};
				} catch (error) {
					return {
						content: [{
							type: "text",
							text: `Error searching components: ${error instanceof Error ? error.message : String(error)}`
						}],
					};
				}
			}
		);

		// Tool to get component dependencies
		this.server.tool(
			"get_dependencies",
			{
				name: z.string().describe("The name of the component"),
			},
			async ({ name }) => {
				try {
					const response = await fetch(`${REGISTRY_BASE_URL}/r/${name}.json`);

					if (!response.ok) {
						return {
							content: [{
								type: "text",
								text: `Component '${name}' not found (HTTP ${response.status})`
							}],
						};
					}

					const componentData = await response.json();

					const deps = {
						name: (componentData as unknown as { name: string }).name,
						dependencies: (componentData as unknown as { dependencies: string[] }).dependencies || [],
						registryDependencies: (componentData as unknown as { registryDependencies: string[] }).registryDependencies || [],
					};

					return {
						content: [{
							type: "text",
							text: JSON.stringify(deps, null, 2)
						}],
					};
				} catch (error) {
					return {
						content: [{
							type: "text",
							text: `Error fetching dependencies: ${error instanceof Error ? error.message : String(error)}`
						}],
					};
				}
			}
		);
	}
}

export default {
	fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const url = new URL(request.url);

		if (url.pathname === "/sse" || url.pathname === "/sse/message") {
			return MyMCP.serveSSE("/sse").fetch(request, env, ctx);
		}

		if (url.pathname === "/mcp") {
			return MyMCP.serve("/mcp").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
};
