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
        header = req.get("header")
        ip = str(req.get("ip"))
        api_url = req.get("api_url")
        data = req.get("data")

        if data is None:
            data = {}

        protocol = req.get("protocol")
        SimpleLogger.get_logger().info("header: %s", header)
        SimpleLogger.get_logger().info("ip: %s", ip)
        SimpleLogger.get_logger().info("api_url: %s", api_url)
        SimpleLogger.get_logger().info("data: %s", jsonpickle.encode(data))
        SimpleLogger.get_logger().info("protocol: %s", protocol)

        res = service_request.call_api(ip, api_url, data=data, header=header, protocol=protocol)
        res_data = {
            "data": jsonpickle.decode(res.content),
            "status_code": res.status_code
        }
        return response_builder.build_raw_response(data=res_data, status_code=res.status_code)