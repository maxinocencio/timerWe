# pip install win10toast
from win10toast import *
from time import sleep

notificacaoAgua = ToastNotifier()
notificacaoExercicio = ToastNotifier()


agua = int(input("tempo agua: "))
exercicios = int(input("tempo exercicio: "))


tempoAgua = agua * 2
tempoExercicio = agua * 2


while True:
    def agua():
        notificacaoAgua.show_toast("Beba água!","Você será lembrado")

        sleep(tempoAgua)

    


    def exercicio():
        notificacaoExercicio.show_toast("Hello world!","teste teste teste teste teste teste teste ")

        sleep(tempoExercicio)







#while toaster.notification_active(): time.sleep(0.1)
