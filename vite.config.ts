import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function localDevApiPlugin(): Plugin {
  return {
    name: 'local-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const isContact = req.url?.startsWith('/api/contact');
        const isFeedback = req.url?.startsWith('/api/feedback');

        if ((isContact || isFeedback) && req.method === 'POST') {
          let bodyStr = '';
          req.on('data', (chunk) => {
            bodyStr += chunk;
          });
          req.on('end', async () => {
            try {
              const body = JSON.parse(bodyStr || '{}');
              const fakeReq = {
                method: 'POST',
                body,
                headers: req.headers,
              };
              const fakeRes = {
                setHeader: (name: string, val: string) => {
                  res.setHeader(name, val);
                },
                status: (statusCode: number) => ({
                  json: (jsonBody: any) => {
                    res.statusCode = statusCode;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(jsonBody));
                  },
                  end: () => res.end(),
                }),
              };

              const modulePath = isFeedback ? './api/feedback.ts' : './api/contact.ts';
              const module = await server.ssrLoadModule(modulePath);
              const handler = module.default;
              await handler(fakeReq, fakeRes);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err?.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    plugins: [react(), tailwindcss(), localDevApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
