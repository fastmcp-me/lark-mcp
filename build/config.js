function parseArgs() {
    const args = process.argv.slice(2);
    const config = {};
    // Use positional arguments - first is appId, second is appSecret
    if (args.length >= 1)
        config.appId = args[0];
    if (args.length >= 2)
        config.appSecret = args[1];
    return config;
}
// Get config from command line args first, then fall back to environment variables
const argsConfig = parseArgs();
export const config = {
    appId: argsConfig.appId || process.env.LARK_APP_ID || '',
    appSecret: argsConfig.appSecret || process.env.LARK_APP_SECRET || ''
};
// Validate config
if (!config.appId || !config.appSecret) {
    console.error(`
Error: Missing required credentials
Please provide credentials either through:
1. Command line arguments (recommended):
   npx command <app_id> <app_secret>
2. Environment variables:
   LARK_APP_ID=xxx LARK_APP_SECRET=xxx npx command
  `);
    process.exit(1);
}
