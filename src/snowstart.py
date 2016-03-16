__author__ = 'Edward'
from flask import Flask
from flask_cors import CORS
from lib.collection_api import collection_api
from lib.misc_api import misc_api
from lib.service_api import service_api
from lib.version_api import version_api
from common.constants import *
from common import response_builder
from common.simple_logger import SimpleLogger
from db.mongo_service import MongoService
from model.api_model import ApiModel

app = Flask(__name__, static_url_path='')
cors = CORS(app)

app.register_blueprint(collection_api)
app.register_blueprint(misc_api)
app.register_blueprint(service_api)
app.register_blueprint(version_api)

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

if __name__ == "__main__":
    logger = SimpleLogger.setup(file_path="/preserve/logs/snowflake/snowflake.log", process_name="SNOWFLAKE")
    MongoService.init(logger)
    app.config["SECRET_KEY"] = "ITSASECRET"
    app.run(debug=False, host='0.0.0.0', port=4000, threaded=True)
