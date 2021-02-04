const {app, BrowserWindow, Notification } = require('electron')

/** function that creates a new window and load html file */
function createWindow(){

    // window with preferred size and feature
    const window = new BrowserWindow({
        width: 800,
        height: 600, 
        webPreferences: {
            // use node.js api
            nodeIntegration: true
        }
    })

    // window that load html file once created
    window.loadFile('index.html')
}

function showNotification(){
    const notificationOpt = {
        title: 'Basic Notification',
        body: 'Simple notification from the main process'
    }
    new Notification(notificationOpt).show()
}

// when the application is ready, create the window
app.whenReady().then(createWindow).then(showNotification)

// quit on "window-all-closed" event
app.on('window-all-closed', () => {
    // this is more of a convention for specific platform
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

// on "activate" event, if there is no window, create one
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0)
        createWindow()
})