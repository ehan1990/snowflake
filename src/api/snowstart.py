__author__ = 'Edward'

from flask import Flask, request, Response
from flask_cors import CORS
from common.constants import *
from common import response_builder

app = Flask(__name__, static_url_path='')

cors = CORS(app)

@app.route(ROOT_API + "/aafar", methods=['POST'])
def aafar():
    req = request.get_json(force=True)
    return response_builder.build_data_response(data=req)

@app.route(ROOT_API + "/foobar", methods=['GET'])
def foobar():
    m = {
        "test": "test"
    }
    return response_builder.build_data_response(data=m)

if __name__ == "__main__":
    app.config["SECRET_KEY"] = "ITSASECRET"
    app.run(debug=True, host='0.0.0.0', port=4000, threaded=True)