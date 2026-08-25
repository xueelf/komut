import { input } from '#src/prompts/input';

const first = input('first value', {
  default: 'komut',
  validate: value =>
    /^[a-z]+$/.test(value) || 'Only lowercase letters are allowed.',
});
const second = input('second value', { default: 'fallback' });

process.stdout.write(`RESULT=${JSON.stringify({ first, second })}\n`);
