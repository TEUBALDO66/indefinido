let valor = 0
basic.forever(function () {
    valor = input.lightLevel()
    if (valor < 51) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
