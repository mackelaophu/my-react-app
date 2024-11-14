const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'dist/index.js',
  platform: 'node',  // Cấu hình cho Node.js
  target: 'es2020',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  external: ['jsdom', 'xhr-sync-worker.js'],
  inject: ['./src/polyfill.js'],
  plugins: [
    {
      name: 'node-url',
      setup(build) {
        build.onResolve({ filter: /^node:url$/ }, () => ({
          path: require.resolve('url'),  // Giải quyết bằng package 'url'
          namespace: 'url',
        }));
      },
    },
  ],
}).catch(() => process.exit(1));