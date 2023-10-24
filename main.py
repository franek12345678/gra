def on_button_pressed_a():
    if gra == 1:
        basic.show_icon(IconNames.YES)
        basic.pause(2000)
        control.reset()
    else:
        basic.show_icon(IconNames.NO)
        basic.pause(2000)
        control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if gra == 2:
        basic.show_icon(IconNames.YES)
        basic.pause(2000)
        control.reset()
    else:
        basic.show_icon(IconNames.NO)
        basic.pause(2000)
        control.reset()
input.on_button_pressed(Button.B, on_button_pressed_b)

wynikzmyłka = 0
wynik = 0
gra = 0
czynnik1 = randint(0, 10)
czynnik2 = randint(0, 10)
iloczyn = czynnik1 * czynnik2
zmyłka = randint(1, 100)
gra = randint(1, 2)
if zmyłka == iloczyn:
    control.reset()
if gra == 1:
    wynik = iloczyn
else:
    wynik = zmyłka
if gra == 1:
    wynikzmyłka = zmyłka
else:
    wynikzmyłka = iloczyn
basic.show_string("" + str(czynnik1) + "x" + str(czynnik2) + "=" + "a." + str(wynik) + "b." + str(wynikzmyłka))