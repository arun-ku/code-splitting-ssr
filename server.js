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
    let modules = [];
    console.log('url', req.url)
    const currenntRoute = routes.find(route => matchPath(req.url, route))
    console.log(currenntRoute)
    if (currenntRoute) {
      const params = matchPath(req.url, currenntRoute).params;
      console.log('WWWWWWWWWWWWWWWW', params)
      // if(currentDataRequest) {
      console.log('###########', currenntRoute.component.preload().then((c) => {
        const currentDataRequest = c.default.need && c.default.need(params);
        Promise.resolve(currentDataRequest || {data: []}).then((response) => {
          console.log('############inside########')
          let html = renderToString(
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
              <StaticRouter context={{initialData: response.data}} location={req.url}>
                <App />
              </StaticRouter>
            </Loadable.Capture>
          );
          let bundles = getBundles(stats, modules);
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
        ${bundles.map(bundle => {
            return `<script src="/${bundle.file}"></script>`
          }).join('\n')}
        </html>
    `);
        });
      }))
    }

    // }
});


Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});