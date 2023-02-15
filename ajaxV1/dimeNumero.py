#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python

import cgi

args = cgi.parse()

n = int(args['num'][0])

print("Content-Type: text/text\n")

print("hola... su nomero por dos es: ",n*2)