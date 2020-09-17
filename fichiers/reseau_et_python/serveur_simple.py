#coding:utf-8
import socket

hote = 'localhost'
port = 5566


mon_socket1 = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #on créé le socket avec les protocoles classiques

mon_socket1.bind((hote,port))     #lie le scoket à un port et une adresse

print("Le serveur est démarré...")

while True:
    mon_socket1.listen(5)     #on définit le nombre de tentatives de connexion avant que le serveur refuse d'autres connexions
    connexion, adresse = mon_socket1.accept()
    print("Un client connecté...")
    
    msg_client = connexion.recv(1024)   #on reçoit en spécifiant la taille du buffer (multiple de 2)
    msg_client = msg_client.decode("utf8")
    print(msg_client)


connexion.close()   #on ferme la connexion avant...
mon_socket1.close()      #de fermer le socket