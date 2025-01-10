# Angular Proxy Example

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

This project demonstrates an advanced example of using Angular `proxy.conf.json` and environment variables for configuring Development and Production compilations.

## Advanced example using Environments
Only use it in following cases
- You already have the same route as API directory 
- You have multiple API you want to merge or separate
- You have a proxy on a different machine

In other cases you can just use [Basic Example](#basic-example-no-environments-needed)
### Development server
To start a local development server, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`.
Your proxy starts at `http://localhost:4200/api` and all API endpoints are accessible through it.
### Production server
```bash
ng build
```
This will compile your project and store the build artifacts in the `dist/` directory.
Also, it replaces your `environment.development.ts` with `environment.ts`, so app starts to use production API.


## Basic Example, no Environments needed
It's not necessary to use `/api` directory as your proxy, you can simply use the same directory as your API uses, example of `proxy.conf.json` with `/rest` directory.
```bash
{
  "/rest": {
    "target": "https://djarviss.ru",
    "changeOrigin": true
  }
}
```
In this case you don't need to use environment files for proxy because API endpoints will be the same `location.origin + /rest/` for Development and Production compilations.
