Stock Logger

- dashboard
- stock
- orders
- logs

# refactoring

From src into src/react and src/shared so we can communicate with electron main process. [Docs](https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649)

Impediments: when building electron app - production goes into symbols. Electron dev works fine.

Action points:

- find a way to build the app with new refactor OR
- find a way to communicate with electron main renderer without this refactor
