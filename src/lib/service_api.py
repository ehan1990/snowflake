__author__ = 'ehan'
import jsonpickle
import service_request
from flask import Blueprint, request
from common.constants import *
from common import response_builder
from common.simple_logger import SimpleLogger

service_api = Blueprint('service_api', __name__)

@service_api.route(ROOT_API + "/callapi", methods=["POST"])
def api_call_service():
    if request.method == "POST":
        SimpleLogger.get_logger().info("---------- called callapi ----------")
        req = request.get_json(force=True)
        protocol = str(req.get("protocol"))
        ip = str(req.get("ip"))
        api_url = str(req.get("api_url"))
        data = str(req.get("data"))
        method = str(req.get("method"))

        if data is None or data == 'None':
            data = {}

        res = service_request.call_api(protocol, ip, api_url, method, data=data)
        res_data = {
            "data": jsonpickle.decode(res.content),
            "status_code": res.status_code
        }
        return response_builder.build_raw_response(data=res_data, status_code=res.status_code)