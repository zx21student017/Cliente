#!C:\Users\JJ\AppData\Local\Microsoft\WindowsApps\python.exe

import json
import cgi

args = cgi.parse()

n = int(args['num'][0])

fibo=[1,1,2,3,5,8,13,21,34,55]

print("Content-Type: text/plain\n")

if 0<n>10:
	print(json.dumps(-1))
else:
	print(json.dumps(fibo[:n]))