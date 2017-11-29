import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App, {routes} from './src/routes';
import { StaticRouter, matchPath, } from 'react-router-dom';

import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from './dist/react-loadable.json';

const app = express();

app.use(express.static('./dist/public'));

app.get('*', (req,res) => {
    const currenntRoute = routes.find(route => matchPath(req.url, route));
    if (currenntRoute) {
      const params = matchPath(req.url, currenntRoute).params;
      // if(currentDataRequest) {
      currenntRoute.component.preload().then((c) => {
        const currentDataRequest = c.default.need && c.default.need(params);
        Promise.resolve(currentDataRequest || {data: []}).then((response) => {
          let modules = [];
          let html = renderToString(
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
              <StaticRouter context={{initialData: response.data}} location={req.url}>
                <App />
              </StaticRouter>
            </Loadable.Capture>
          );
          console.log('######modules######', modules)
          let bundles = getBundles(stats, modules);
          console.log('######modules######', modules)
          res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <script src="/bundle.js" defer></script>
        </head>
        <body>
            <div id="app">${html}</div>
        </body>
        <script type="text/javascript">
          window.initialData = ${JSON.stringify((response.data))}
        </script>
        <script src="/bundle.js"></script>
        ${bundles.map(bundle => {
            return `<script src="/${bundle.file}"></script>`
        }).join('\n')}
        <script>window.main();</script>
        </html>
    `);
        });
      })
    }

    // }
});


Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});