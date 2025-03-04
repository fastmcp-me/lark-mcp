import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { LarkClient } from "./lark-client.js";
// Initialize Lark client
const larkClient = new LarkClient();
// Create MCP server
const server = new McpServer({
    name: "lark-mcp",
    version: "1.0.0"
});
// Tool for getting user information
server.tool("get-user-info", {
    employee_id: z.string().describe("Employee ID to look up")
}, async ({ employee_id }) => {
    try {
        const userData = await larkClient.getUserInfo(employee_id);
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify(userData, null, 2)
                }]
        };
    }
    catch (error) {
        return {
            content: [{
                    type: "text",
                    text: `Error fetching user info: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true
        };
    }
});
// Example tool structure - will be replaced with actual implementations
server.tool("send-message", {
    receive_id: z.string().describe("Receiver's ID"),
    msg_type: z.string().describe("Message type (text, post, image, etc.)"),
    content: z.string().describe("Message content")
}, async ({ receive_id, msg_type, content }) => {
    try {
        // Placeholder for actual implementation
        return {
            content: [{
                    type: "text",
                    text: "Message sent successfully"
                }]
        };
    }
    catch (error) {
        return {
            content: [{
                    type: "text",
                    text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true
        };
    }
});
// Main function to start the server
async function main() {
    try {
        const transport = new StdioServerTransport();
        await server.connect(transport);
        console.error("Lark MCP Server running on stdio");
    }
    catch (error) {
        console.error("Fatal error:", error);
        process.exit(1);
    }
}
// Start the server
main().catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
});
