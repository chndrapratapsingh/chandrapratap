const {app,BrowserWindow} = require('electron');

function crwin()
{
    const win = new BrowserWindow({
        width:400,
        height:500
    });
    win.loadFile('index.html');
}

app.whenReady().then(crwin);