#!C:\Users\JJ\AppData\Local\Microsoft\WindowsApps\python.exe

import cgi

args = cgi.parse()

n = int(args['num'][0])

print("Content-Type: text/text\n")

print("hola... su numero por dos es: ",n*2)