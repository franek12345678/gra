input.onButtonPressed(Button.A, function () {
    if (gra == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        control.reset()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (gra == 2) {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        control.reset()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        control.reset()
    }
})
let wynikzmyłka = 0
let wynik = 0
let gra = 0
let czynnik1 = randint(0, 10)
let czynnik2 = randint(0, 10)
let iloczyn = czynnik1 * czynnik2
let zmyłka = randint(1, 100)
gra = randint(1, 2)
if (zmyłka == iloczyn) {
    control.reset()
}
if (gra == 1) {
    wynik = iloczyn
} else {
    wynik = zmyłka
}
if (gra == 1) {
    wynikzmyłka = zmyłka
} else {
    wynikzmyłka = iloczyn
}
basic.showString("" + czynnik1 + "x" + ("" + czynnik2) + "=" + "a." + ("" + wynik) + "b." + ("" + wynikzmyłka))
