__author__ = 'ehan'

from flask import Blueprint
from common.constants import *
from common import response_builder

misc_api = Blueprint("misc_api", __name__)

@misc_api.route(ROOT_API + "/keepalive", methods=['GET'])
def api_keepalive():
    return response_builder.build_success_response()