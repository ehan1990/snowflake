__author__ = 'ehan'
import requests
import jsonpickle
from common.simple_logger import SimpleLogger
from common.constants import *

def call_api(protocol, ip, api_url, method, data=None):
    url = protocol + ip + api_url
    SimpleLogger.get_logger().info("calling: %s, method=%s", url, method)
    if method == GET:
        response = requests.get(url)
    elif method == PUT:
        response = requests.put(url, data=jsonpickle.encode(data))
    elif method == POST:
        response = requests.post(url, data=jsonpickle.encode(data))
    else:
        response = requests.delete(url, data=jsonpickle.encode(data))
    SimpleLogger.get_logger().info("status code: %s", response.status_code)
    return response