import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { setupTools } from './register-tools';

/**
 * Create a new MCP Server instance.
 *
 * Each transport connection requires its own Server instance because the SDK
 * only allows a single transport per Server. Using a singleton caused
 * "Already connected to a transport" errors when a client disconnected and
 * reconnected.
 */
export const createMcpServer = (): Server => {
  const server = new Server(
    {
      name: 'ChromeMcpServer',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  setupTools(server);
  return server;
};
