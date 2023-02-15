#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python

from urllib.request import urlopen

# Abrir URL.
r = urlopen("https://random-data-api.com/api/v2/users")

# Leer el contenido y e imprimir su tamaño.
print(len(r.read()))

# Cerrar para liberar recursos.
r.close()

print("Content-Type: text/text\n")