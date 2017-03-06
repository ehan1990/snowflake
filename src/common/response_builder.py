__author__ = 'Edward'

import jsonpickle
from flask import Response


def build_response(data, status_code=200):
    result = jsonpickle.encode(data)
    res = Response(response=result, status=status_code, mimetype="application/json")
    return res


def send_status_code(status_code=200):
    res = Response(response={}, status=status_code, mimetype="application/json")
    return res

