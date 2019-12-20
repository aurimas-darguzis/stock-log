const { app, ipcMain, BrowserWindow } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

// const knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: './Stock.db',
//   },
// });

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.webContents.send('resultSent', ['laba', 'vakara']);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => (mainWindow = null));

  ipcMain.on('mainWindowLoaded', () => {
    console.log('main win loaded...');
    //   let result = knex.select('item').from('all_items');
    //   result.then(rows => {
    mainWindow.webContents.send('resultSent', ['laba', 'diena']);
    //   });
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
