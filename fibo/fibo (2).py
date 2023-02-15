#!C:\Users\JJ\AppData\Local\Microsoft\WindowsApps\python.exe

import json
import cgi

args = cgi.parse()

i = int(args['numI'][0])
n = int(args['num'][0])

fibo=[1,1,2,3,5,8,13,21,34,55]

print("Content-Type: text/plain\n")

#0<i<f<10
if 0<i<n<10:
	print(json.dumps(fibo[i-1:n]))
else:
	print(json.dumps(-1))