__author__ = 'Edward'

import jsonpickle
from flask import Response

def build_data_response(data=None, status_code=200):
    if data is None:
        res = Response(response=None, status=400, mimetype="application/json")
        return res
    else:
        result = jsonpickle.encode(data)
        res = Response(response=result, status=status_code, mimetype="application/json")
        return res

def build_success_response(data=None, msg=None, status_code=200):
    m = {
        "msg": msg,
        "success": True,
        "data": data
    }
    jm = jsonpickle.encode(m)
    res = Response(response=jm, status=status_code, mimetype="application/json")
    return res

def build_error_response(data=None, msg=None, status_code=400):
    m = {
        "msg": msg,
        "success": True,
        "data": data
    }
    jm = jsonpickle.encode(m)
    res = Response(response=jm, status=status_code, mimetype="application/json")
    return res