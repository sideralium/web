import { app, BrowserWindow } from 'electron';

const createWindow = () => {
    (new BrowserWindow({ width: 800, height: 600 }))
        .loadFile('index.html');
}

app.whenReady().then(() => { createWindow() });
