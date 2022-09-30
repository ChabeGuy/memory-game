input.onPinPressed(TouchPin.P0, function () {
    if (WaitingForGuess == true) {
        Guess = 0
        WaitingForGuess = false
        led.plot(0, 4)
        music.playTone(262, music.beat(BeatFraction.Eighth))
        basic.pause(437.5)
        led.unplot(0, 4)
        if (Guess == CurrentPositions.shift()) {
            if (CurrentPositions.length > 0) {
                WaitingForGuess = true
            } else {
                game.addScore(1)
                New_Pattern()
            }
        } else {
            music.playMelody("F G F E F E D D ", 120)
            game.gameOver()
        }
    }
})
function New_Pattern () {
    WaitingForGuess = false
    CurrentPositions = []
    TotalPositions.push(PossiblePositions._pickRandom())
    for (let Position of TotalPositions) {
        CurrentPositions.push(Position)
    }
    for (let Position of CurrentPositions) {
        basic.pause(750)
        if (Position == 0) {
            led.plot(0, 4)
            music.playTone(262, music.beat(BeatFraction.Eighth))
            basic.pause(437.5)
            led.unplot(0, 4)
        } else if (Position == 1) {
            led.plot(2, 0)
            music.playTone(294, music.beat(BeatFraction.Eighth))
            basic.pause(437.5)
            led.unplot(2, 0)
        } else {
            led.plot(4, 4)
            music.playTone(330, music.beat(BeatFraction.Eighth))
            basic.pause(437.5)
            led.unplot(4, 4)
        }
    }
    WaitingForGuess = true
}
input.onPinPressed(TouchPin.P2, function () {
    if (WaitingForGuess == true) {
        Guess = 2
        WaitingForGuess = false
        led.plot(4, 4)
        music.playTone(330, music.beat(BeatFraction.Eighth))
        basic.pause(437.5)
        led.unplot(4, 4)
        if (Guess == CurrentPositions.shift()) {
            if (CurrentPositions.length > 0) {
                WaitingForGuess = true
            } else {
                game.addScore(1)
                New_Pattern()
            }
        } else {
            music.playMelody("F G F E F E D D ", 120)
            game.gameOver()
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (WaitingForGuess == true) {
        Guess = 1
        WaitingForGuess = false
        led.plot(2, 0)
        music.playTone(294, music.beat(BeatFraction.Eighth))
        basic.pause(437.5)
        led.unplot(2, 0)
        if (Guess == CurrentPositions.shift()) {
            if (CurrentPositions.length > 0) {
                WaitingForGuess = true
            } else {
                game.addScore(1)
                New_Pattern()
            }
        } else {
            music.playMelody("F G F E F E D D ", 120)
            game.gameOver()
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("E F G C5 - A C5 C5 ", 400)
    GameStart = true
    TotalPositions = []
    game.setScore(0)
    basic.clearScreen()
    New_Pattern()
})
let Guess = 0
let WaitingForGuess = false
let GameStart = false
let TotalPositions: number[] = []
let CurrentPositions: number[] = []
let PossiblePositions: number[] = []
PossiblePositions = [0, 1, 2]
CurrentPositions = []
TotalPositions = []
GameStart = false
WaitingForGuess = false
while (GameStart == false) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
