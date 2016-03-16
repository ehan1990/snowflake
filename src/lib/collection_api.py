__author__ = 'ehan'

import subprocess
from flask import Blueprint, request
from common.constants import *
from common import response_builder
from db.mongo_service import MongoService
from model.common_model import *

collection_api = Blueprint("collection_api", __name__)

@collection_api.route(ROOT_API + "/collections", methods=['GET'])
def api_get_collections():
    req_model = RequestModel(request)
    m = MongoService.query(DB_COLLECTIONS, page=req_model.page)
    count = MongoService.count(DB_COLLECTIONS, match={})
    return response_builder.build_data_response(data=m, count=count)