#!C:\Users\zx21student017\AppData\Local\Microsoft\WindowsApps\python

import cgi

form = cgi.FieldStorage()
num = int(form['numero'].value)

print("Content-Type: text/plain\n")
print(num*2)