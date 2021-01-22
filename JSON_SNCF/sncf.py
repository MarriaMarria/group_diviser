import pprint
import json
import requests

a_dict = {"station": "Saint Petersburg"}

# a_dict = {}

json_data = None
with open("stop_areas.json", "r+") as f:
    file = f.read()
    json_data = json.loads(file) #json.loads() takes a json string and converts it to a python object
    json_data.update(a_dict)
    f.seek(0)
    json.dump(json_data, f) #json.dumps() takes a python object and converts it to a string

pprint.pprint(json_data)

# stop_areas: ["Saint Petersburg"]


headers = {"Authorization": "e3f2b3a6-caa9-47d7-98ee-1f67379e654b"}
response = requests.get("https://api.sncf.com/v1/coverage/sncf/stop_areas", headers=headers)

print(response.text)
# print(response.json()) // get reponse in json

pprint.pprint(response.text)
















