# Migration setup

Open 3 terminals

## /legacy

Serves aspx pages

```
cd legacy
npm i && npm start
```

View this separately at localhost:5001

## /spa

Vue app with routing, creates a bundle for the proxy to serve

```
cd spa
npm i && npm start
```

## /proxy

- Redirects old routes to new routes
- Serves spa
- Directs traffic tolegacy app

```
cd proxy
npm i && npm start
```

View at localhost:5000

## Takeaways

- To route host app from iframe, target="\_top" needs to be added to every `<a></a>` in the legacy app
- The legacy app can still use old /WebApp/ routes
- Route changes originating from the iframe will cause a page refresh
- The iframe needs to point to the /legacy/ route, not directly to the WebApp
- To have the http://localhost:5000/details/1 route work, the proxy needs to have fallback routing. If this is not desired we can use hash routing instead
