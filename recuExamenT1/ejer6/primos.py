#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python
import cgi,json

form = cgi.FieldStorage()
nms = form['numeros'].value
nms = nms.split(" ")
resultado=0
premiados=[1,4,21,24,46]
for n in nms:
    if int(n) in premiados:
        resultado+=1
print("Content-Type: text/plain\n")
print(json.dumps(resultado))