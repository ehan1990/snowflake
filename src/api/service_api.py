__author__ = 'ehan'

from flask import Blueprint, request
from common.constants import *
from common import response_builder
from common.simple_logger import SimpleLogger

service_api = Blueprint('service_api', __name__)

@service_api.route(ROOT_API + "/post", methods=["POST"])
def api_call_service():
    if request.method == "POST":
        SimpleLogger.get_logger().info("called post api")
        return response_builder.build_success_response()
    # if request.method == "GET":
    #     res = box_service.get_box_list()
    #     return response_builder.build_data_response(data=res)
    # else:
    #     req = request.get_json(force=True)
    #     box_template_file = str(req.get("box_template_file"))
    #     res = box_service.create_boxinfo_from_json(box_template_file=box_template_file, dpi_info_file="ZB0_DPI.json")
    #     if res is True:
    #         return response_builder.build_success_response()
    #     else:
    #         return response_builder.build_error_response(msg="could not create box node")