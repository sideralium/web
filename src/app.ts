import { app, BrowserWindow } from 'electron';

if (!process.env.PEPFLASHPLAYER_PATH) {
    console.error('no path set to pepflashplayer');
    process.exit(1);
}

app.commandLine.appendSwitch('ppapi-flash-path', process.env.PEPFLASHPLAYER_PATH);
app.commandLine.appendSwitch('ppapi-flash-version', process.env.PEPFLASHPLAYER_VERSION || '32.0.0.465');

app.whenReady().then(() => {
    (new BrowserWindow({ webPreferences: { plugins: true, webviewTag: true } })).loadFile('./index.html');
});
