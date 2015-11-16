__author__ = 'Edward'

from flask import Flask
from flask_cors import CORS
from common.constants import *
from common import response_builder
from model.api_model import ApiModel

app = Flask(__name__, static_url_path='')
cors = CORS(app)

@app.route(ROOT_API, methods=['GET'])
def api_discovery():
    api_list = []
    for rule in app.url_map.iter_rules():
        methods = rule.methods
        if "HEAD" in methods:
            methods.remove("HEAD")
        if "OPTIONS" in methods:
            methods.remove("OPTIONS")
        api_model = ApiModel(str(rule.rule), list(methods))
        api_list.append(api_model)
    api_list.sort(key=lambda api_model: api_model.url, reverse=False)

    i = 0
    for a in api_list:
        api_list[i] = a.__dict__
        i += 1
    return response_builder.build_raw_response(data=api_list)

@app.route(ROOT_API + "/keepalive", methods=['POST'])
def api_keepalive():
    return response_builder.build_success_response()

if __name__ == "__main__":
    app.config["SECRET_KEY"] = "ITSASECRET"
    app.run(debug=False, host='0.0.0.0', port=4000, threaded=True)