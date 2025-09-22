input.onButtonPressed(Button.A, function () {
    enpontom += 1
    if (enpontom == 3) {
        basic.showString("N")
        enpontom = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    vszam = randint(1, 3)
    if (vszam == 1) {
        basic.showIcon(IconNames.Target)
        radio.sendNumber(1)
    } else {
        if (vszam == 2) {
            basic.showIcon(IconNames.Square)
            radio.sendNumber(2)
        } else {
            basic.showIcon(IconNames.Scissors)
            radio.sendNumber(3)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    enpontom = 0
})
input.onButtonPressed(Button.B, function () {
    enpontom += -1
    if (enpontom == -3) {
        basic.showString("V")
        enpontom = 0
    }
})
radio.onReceivedValue(function (name, value) {
    if (value == 2) {
    	
    }
})
let vszam = 0
let enpontom = 0
enpontom = 0
basic.forever(function () {
    radio.setGroup(1)
})
