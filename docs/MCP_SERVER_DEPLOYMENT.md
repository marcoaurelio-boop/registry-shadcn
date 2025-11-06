# MCP Server Deployment Guide

This guide explains how to deploy the MCP server to Cloudflare Workers.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://www.cloudflare.com)
2. **Wrangler CLI**: Already installed as a dev dependency, but you may need to authenticate

## Step 1: Authenticate with Cloudflare

First, authenticate Wrangler with your Cloudflare account:

```bash
cd my-mcp-server
pnpm wrangler login
```

This will open a browser window to authenticate with Cloudflare. After authentication, Wrangler will be able to deploy to your account.

## Step 2: Install Dependencies

Make sure all dependencies are installed:

```bash
cd my-mcp-server
pnpm install
```

## Step 3: Deploy the MCP Server

Deploy the server to Cloudflare Workers:

```bash
cd my-mcp-server
pnpm deploy
```

Or directly with Wrangler:

```bash
cd my-mcp-server
pnpm wrangler deploy
```

## Step 4: Verify Deployment

After deployment, Wrangler will output the deployment URL. It should look like:

```
https://my-mcp-server.<your-subdomain>.workers.dev
```

You can test the deployment by visiting:
- **SSE Endpoint**: `https://my-mcp-server.<your-subdomain>.workers.dev/sse`
- **MCP Endpoint**: `https://my-mcp-server.<your-subdomain>.workers.dev/mcp`

## Step 5: Update Registry Base URL (Optional)

If you want to use a different registry URL, update the `REGISTRY_BASE_URL` constant in `my-mcp-server/src/index.ts`:

```typescript
const REGISTRY_BASE_URL = "https://your-registry-url.com";
```

Then redeploy:

```bash
pnpm deploy
```

## Connecting to the Deployed MCP Server

### Option 1: Cloudflare AI Playground

1. Go to [https://playground.ai.cloudflare.com/](https://playground.ai.cloudflare.com/)
2. Enter your deployed MCP server SSE URL: `https://my-mcp-server.<your-subdomain>.workers.dev/sse`
3. Use your MCP tools directly from the playground!

### Option 2: Claude Desktop

To connect Claude Desktop to your remote MCP server, use the `mcp-remote` proxy:

1. Install `mcp-remote` globally (if not already installed):
   ```bash
   npm install -g mcp-remote
   ```

2. Update Claude Desktop configuration:
   - Go to Settings > Developer > Edit Config
   - Add this configuration:

   ```json
   {
     "mcpServers": {
       "shadcn-registry": {
         "command": "npx",
         "args": [
           "mcp-remote",
           "https://my-mcp-server.<your-subdomain>.workers.dev/sse"
         ]
       }
     }
   }
   ```

3. Restart Claude Desktop

### Option 3: Cursor/Other MCP Clients

For Cursor or other MCP clients, configure them to use the `mcp-remote` proxy with your deployed URL.

## Available MCP Tools

Once connected, your MCP server provides these tools:

1. **`list_components`**: List all available components in the registry
   - Optional filter by type: `registry:ui`, `registry:component`, `registry:block`, `registry:theme`, `registry:lib`

2. **`get_component`**: Get detailed information about a specific component
   - Requires: `name` (e.g., "button", "catlife-hero")

3. **`search_components`**: Search components by keyword
   - Requires: `query` (searches name, title, and description)

4. **`get_dependencies`**: Get dependencies for a specific component
   - Requires: `name` (component name)

## Troubleshooting

### Authentication Issues

If you get authentication errors:
```bash
pnpm wrangler login
```

### Deployment Errors

If deployment fails, check:
1. Your Cloudflare account has Workers enabled
2. You have the necessary permissions
3. The `wrangler.jsonc` configuration is correct

### Type Errors

If you see TypeScript errors during deployment, they should be ignored as the build process handles compilation. However, if you want to check types locally:

```bash
cd my-mcp-server
pnpm type-check
```

## Local Development

To test the MCP server locally before deploying:

```bash
cd my-mcp-server
pnpm dev
```

This starts a local development server at `http://localhost:8787`. You can test the endpoints:
- `http://localhost:8787/sse`
- `http://localhost:8787/mcp`

## Environment Variables

If you need to set environment variables or secrets:

```bash
# Set a secret (for sensitive data)
pnpm wrangler secret put MY_SECRET

# Set environment variables (for non-sensitive data)
# Edit wrangler.jsonc and add to "vars" section
```

## Updating the Deployment

To update your deployed MCP server after making changes:

```bash
cd my-mcp-server
pnpm deploy
```

Wrangler will automatically update the existing deployment.

## Monitoring

You can monitor your deployed Worker:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Workers & Pages
3. Click on your `my-mcp-server` worker
4. View logs, metrics, and analytics

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [MCP Protocol Documentation](https://modelcontextprotocol.io/)
- [Cloudflare Agents Documentation](https://developers.cloudflare.com/agents/)

