import {defineConfig} from 'vitest/config';import path from 'node:path';
export default defineConfig({test:{environment:'node',include:['tests/{unit,integration,security}/**/*.{test,spec}.ts'],coverage:{reporter:['text','html']}},resolve:{alias:{'@':path.resolve(__dirname,'src')}}});
