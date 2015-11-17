import requests, json

url = 'http://localhost:1337/setup/api/time'
payload = {'time': '2015-06-15T18:33:35Z'}
headers = {'content-type': 'application/json'}

response = requests.post(url, data=json.dumps(payload), headers=headers)
print response
