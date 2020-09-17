import sys

class netaddr():
    def __init__(self,s):           #création de la classe nettaddr
        t=s.split(".")              # découpe l'adresse IP saisie en liste de 4 entiers
        if len(t) != 4:             # vérifie si l'adrese IP comporte bien 4 octets en vérifiant la longueur de la liste
            print ('adresse IP {} non valide !'.format(s))
            sys.exit()
        for val in t:
            try :                           # try ... except  gestion des exceptions : permet l'arrêt du script en cas d'erreur de saisie 
                if (int(val) <= 255):       # vérifie que la valeur saisie est bien représentable sur 1 octet
                    continue
            except:
                print ('adresse IP {} non valide !'.format(s))
                sys.exit()                  #  quitte le script
        self.a = int((s.split("."))[0])     # stocke dans a la valeur de l'indice 0 de la liste s.plit
        self.b = int((s.split("."))[1])     # stocke dans b la valeur de l'indice 1 de la liste s.plit
        self.c = int((s.split("."))[2])     #...
        self.d = int((s.split("."))[3])     #...

def main(addr1,addr2,netmask):

    addr1 == addr2 and sys.exit("[Abandon] les adresses IP sont identiques !")  #teste si les 2 IP sont indentiques
    a1 = netaddr(addr1)             # l'adresse IP 1 saisie devient élément de la classe Netaddr, il existe dont a1.a, a1.b,...
    a2 = netaddr(addr2)             # idem pour IP 2
    mask = netaddr(netmask)         # idem pour le masque

    a1rx=str(a1.a & mask.a) +'.'+str(a1.b & mask.b) +'.'+str(a1.c & mask.c) +'.'+str(a1.d & mask.d)
    a2rx=str(a2.a & mask.a) +'.'+str(a2.b & mask.b) +'.'+str(a2.c & mask.c) +'.'+str(a2.d & mask.d)

    #Pour les 2 lignes précédentes, je vous laisse réfléchir un peu sur leur rôle. Pour cela, je vous conseille d'ouvrir le shell python
    # ci-dessous puis de saisir '192 & 255'  puis '192 & 0' ....


    addr1 == a1rx and sys.exit("[Abandon] Adresse ip " + addr1+" est une adresse de reseau !")
    addr2 == a2rx and sys.exit("[Abandon] Adresse ip " + addr2+" est une adresse de reseau !")

    print ('-----------------------------------------')
    print ("Adresse 1: "+addr1 +" reseau: "+a1rx+" masque: "+netmask)
    print ("Adresse 2: "+addr2 +" reseau: "+a2rx+" masque: "+netmask)
    print (a1rx==a2rx and 'Masque identique, ils communiquent :-)' or 'Masque different, ils ne communiquent PAS !!')
    print ('-----------------------------------------')



print (" addr1 addr2 masque sous la forme d'une adresse IPv4 : x.x.x.x")
addr1 = input("entrer l'adresse 1 :")
addr2 = input("entre l'adresse 2 :")
netmask = input("entrer le masque :")
main(addr1,addr2,netmask)
sys.exit()
