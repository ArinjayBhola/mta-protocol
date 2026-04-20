import { MTAClient } from './mta_client';

async function main() {
    const client = new MTAClient();
    await client.run('127.0.0.1', 12345);
}

main().catch(console.error);
