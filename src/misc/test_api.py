import requests, json

import requests
url = "http://192.168.0.79/api/v1/login"
#data = '{"query":{"bool":{"must":[{"text":{"record.document":"SOME_JOURNAL"}},{"text":{"record.articleTitle":"farmers"}}],"must_not":[],"should":[]}},"from":0,"size":50,"sort":[],"facets":{}}'
response = requests.get(url)
#print response
print response.content
print type(response.content)