__author__ = 'Edward'
from flask import Flask
from flask_cors import CORS

from common.constants import *
from common import response_builder
from common.simple_logger import SimpleLogger
from db.mongo_service import MongoService
from mw.lib.demo.demo_api import demo_api
from mw.model.api_model import ApiModel

app = Flask(__name__, static_url_path='')
cors = CORS(app)

app.register_blueprint(demo_api)


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
    return response_builder.build_response(api_list)


if __name__ == "__main__":
    # logger = SimpleLogger.setup(file_path="/preserve/logs/snowflake/snowflake.log", process_name="SNOWFLAKE")
    MongoService.init()
    app.config["SECRET_KEY"] = "ITSASECRET"
    app.run(debug=False, host='0.0.0.0', port=5000, threaded=True)
