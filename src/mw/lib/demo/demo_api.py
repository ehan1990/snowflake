__author__ = 'ehan'
from bson import ObjectId
from flask import Blueprint, request
from common.constants import *
from common import response_builder
from db.mongo_service import MongoService

demo_api = Blueprint("demo_api", __name__)

@demo_api.route(ROOT_API + "/demo", methods=['GET'])
def api_get_demo():
    data = MongoService.get_all(DB_DEMO)

    for d in data:
        d["_id"] = str(d["_id"])

    count = MongoService.count(DB_DEMO, dict())
    res = {"content": data, "count": count}
    return response_builder.build_response(res)


@demo_api.route(ROOT_API + "/demo", methods=['POST'])
def api_create_demo():
    req = request.get_json(force=True)
    try:
        MongoService.insert(DB_DEMO, req)
        return response_builder.send_status_code()
    except Exception:
        return response_builder.send_status_code(status_code=500)

@demo_api.route(ROOT_API + "/demo/<string:demo_id>", methods=['DELETE'])
def api_delete_demo(demo_id):
    query = {"_id": ObjectId(str(demo_id))}
    try:
        MongoService.delete_one(DB_DEMO, query)
        return response_builder.send_status_code()
    except Exception:
        return response_builder.send_status_code(status_code=500)