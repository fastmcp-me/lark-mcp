# Lark MCP Server

A Model Context Protocol (MCP) server that integrates with Lark/Feishu APIs, allowing LLMs to interact with Lark services.

## Features

- Query employee information using Lark's Contact API
- More features coming soon...

## Prerequisites

- Node.js 16 or higher
- A Lark/Feishu application with App ID and App Secret
- [Claude for Desktop](https://claude.ai/download) or another MCP client

## Installation

```bash
npm install
npm run build
```

## Usage

You can run the server in two ways:

### 1. Using Command Line Arguments (Recommended)

```bash
npx lark-mcp <app_id> <app_secret>
```

Replace `<app_id>` and `<app_secret>` with your Lark application credentials.

### 2. Using Environment Variables

```bash
export LARK_APP_ID=your_app_id
export LARK_APP_SECRET=your_app_secret
npx lark-mcp
```

## Available Tools

### get-user-info

Retrieves employee information using their ID.

Example usage in Claude:
```
Please look up employee information for ID 12345
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```

## Configuration

The server prioritizes credentials in the following order:
1. Command line arguments
2. Environment variables
3. Default values (if any)

## Error Handling

- The server will validate credentials before starting
- API errors are properly handled and returned to the client
- Detailed error messages help with troubleshooting

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 