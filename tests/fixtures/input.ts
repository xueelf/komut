import { input } from '#src/prompts/input';

const result = input('package name', { default: 'komut' });

process.stdout.write(`RESULT=${result ?? 'null'}\n`);
