#coding:utf-8
import socket

hote = ''
port = 5566


socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #on créé le socket avec les protocoles classiques

socket.bind((hote,port))     #lie le scoket à un port et une adresse

print("Le serveur est démarré...")

while True:
    socket.listen(5)     #on définit le nombre de tentatives de connexion avant que le serveur refuse d'autres connexions
    connexion, adresse = socket.accept()
    print("Serveur en attente...")
    

connexion.close()   #on ferme la connexion avant...
socket.close()      #de fermer le socket