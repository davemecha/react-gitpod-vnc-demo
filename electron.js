const { app, BrowserWindow } = require("electron");

// experiments for reduction of memory consumption
app.commandLine.appendSwitch('media-cache-size', '8388608');
// app.commandLine.appendSwitch('media-cache-size', '33554432');
app.commandLine.appendSwitch('disk-cache-size', '33554432');
// app.commandLine.appendSwitch('max-decoded-image-size-mb', '1');
// app.commandLine.appendSwitch('single-process');
app.commandLine.appendSwitch('renderer-process-limit', '1');
app.commandLine.appendSwitch('memory-pressure-off');


function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadURL("https://medium.com/gitpod/developing-native-ui-applications-in-gitpod-15af2967c24e");

  // Open the DevTools.
  win.webContents.openDevTools({ mode: "detach" });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.