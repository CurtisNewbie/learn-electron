const {app, BrowserWindow, Notification } = require('electron')
const RECENT_DOC = "demo.md"

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

// when the application is ready, create the window, and show a notification
app.whenReady().then(createWindow).then(showNotification)

// add a recent document, only works for windows and macos
app.addRecentDocument(RECENT_DOC)

// to clear the list of recent doc, only works for windows and macos
app.clearRecentDocuments()

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