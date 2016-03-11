__author__ = 'ehan'

import subprocess
from flask import Blueprint
from common.constants import *
from common import response_builder

collection_api = Blueprint("collection_api", __name__)

@collection_api.route(ROOT_API + "/collections", methods=['GET'])
def api_get_collections():
    m = []
    return response_builder.build_raw_response(data=m)