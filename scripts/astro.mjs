import { spawnSync } from 'node:child_process';
import { fileURLToPath, URL } from 'node:url';

// Keep telemetry off for every supported project command, on Windows and Unix.
const cli = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));
const result = spawnSync(process.execPath, [cli, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
