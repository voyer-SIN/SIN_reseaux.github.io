#conding:utf-8
import socket

hote = 'localhost'   #serveur local ou 127.0.0.1
port = 5566   # même port que le serveur

socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #on créé le socket avec les protocoles classiques comme pour le serveur

try:   
    socket.connect((hote,port))
    print("Client connecté")
except ConnectionRefusedError :
    print("connexion au serveur refusé")

finally :
    socket.close()
    
