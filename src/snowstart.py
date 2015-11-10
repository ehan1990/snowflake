__author__ = 'Edward'

from flask import Flask
from flask_cors import CORS
from common.constants import *
from common import response_builder

app = Flask(__name__, static_url_path='')
cors = CORS(app)

@app.route(ROOT_API + "/keepalive", methods=['POST'])
def api_keepalive():
    return response_builder.build_success_response()

if __name__ == "__main__":
    app.config["SECRET_KEY"] = "ITSASECRET"
    app.run(debug=False, host='0.0.0.0', port=4000, threaded=True)