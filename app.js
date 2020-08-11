const { app, BrowserWindow } = require("electron")
const expapp = require("express")()
const bodyParser = require("body-parser");

expapp.use(bodyParser.urlencoded({ extended: false }));
expapp.use(bodyParser.json());

this.window

app.on("ready", () => {
    this.window = new BrowserWindow({ webPreferences: { nodeIntegration: true } })

    this.window.loadURL("https://www.google.com")

    expapp.listen(1661, () => { console.log("1661 port listening") })
})


expapp.get("/", (req, res) => {
    res.render("index.ejs")
})
/* Go backward */
expapp.get("/backward", (req, res) => {
    try {
        this.window.webContents.goBack()
        res.send("ok")
    } catch (error) {
        res.send("error")
    }
})
/* Go forward */
expapp.get("/forward", (req, res) => {
    try {
        this.window.webContents.goForward()
        res.send("ok")
    } catch (error) {
        res.send("error")
    }
})
/* Change page */
expapp.post("/loadurl", (req, res) => {
    try {
        this.window.webContents.loadURL(req.body.url)
        res.send("ok")
    } catch (error) {
        res.send("error")
    }
})
/* Reload page */
expapp.get("/reload", (req, res) => {
    try {
        this.window.webContents.reload()
        res.send("ok")
    } catch (error) {
        res.send("error")
    }
})
/* Mute/Unmute page */
expapp.get("/muteToggle", (req, res) => {
    try {
        this.window.webContents.setAudioMuted(!this.window.webContents.audioMuted)
        res.send(JSON.stringify({ "muted": this.window.webContents.audioMuted }))
    } catch (error) {
        res.send("error")
    }
})