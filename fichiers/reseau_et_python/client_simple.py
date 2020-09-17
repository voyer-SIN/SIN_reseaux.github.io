#coding:utf-8
import socket

hote = 'localhost'   #serveur local ou 127.0.0.1
port = 5566   # même port que le serveur

mon_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #on créé le socket avec les protocoles classiques comme pour le serveur

try:   
    mon_socket.connect((hote,port))
    msg_client = "salut serveur!"
    msg_client = msg_client.encode("utf8")
    mon_socket.sendall(msg_client)   #le client envoie les données vers le serveur sur le port spécifié
    
except :
    print("connexion au serveur échouée")

finally :
    mon_socket.close()
    
