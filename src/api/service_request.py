__author__ = 'ehan'
import requests
import jsonpickle
from common.simple_logger import SimpleLogger
from common.constants import *

def call_api(ip, api_url, data=None, header=HTTP, protocol=GET):
    url = header + ip + api_url
    SimpleLogger.get_logger().info("calling %s api: %s", protocol, url)
    if protocol == GET:
        response = requests.get(url)
    elif protocol == PUT:
        response = requests.put(url, data=jsonpickle.encode(data))
    elif protocol == POST:
        response = requests.post(url, data=jsonpickle.encode(data))
    else:
        response = requests.delete(url, data=jsonpickle.encode(data))
    SimpleLogger.get_logger().info("status code: %s", response.status_code)
    return response