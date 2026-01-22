input.onButtonPressed(Button.A, function () {
    setloggingto0 = !(logging)
})
let logging = 0
let setloggingto0 = false
setloggingto0 = false
loops.everyInterval(500, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.temperature())
        )
    }
})
