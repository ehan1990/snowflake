__author__ = 'ehan'
import requests
import jsonpickle
from common.simple_logger import SimpleLogger

def call_get_api(ip, api_url):
    url = "http://" + ip + api_url
    SimpleLogger.get_logger().info("calling GET: %s", url)
    response = requests.get(url)
    SimpleLogger.get_logger().info("status code: %s", response.status_code)
    return response

def call_post_api(ip, api_url, data):
    url = "http://" + ip + api_url
    SimpleLogger.get_logger().info("calling POST: %s", url)
    response = requests.post(url, data=jsonpickle.encode(data))
    SimpleLogger.get_logger().info("status code: %s", response.status_code)
    return response

def call_put_api(ip, api_url, data):
    url = "http://" + ip + api_url
    SimpleLogger.get_logger().info("calling PUT: %s", url)
    response = requests.put(url, data=jsonpickle.encode(data))
    SimpleLogger.get_logger().info("status code: %s", response.status_code)
    return response

def call_delete_api(ip, api_url, data):
    url = "http://" + ip + api_url
    SimpleLogger.get_logger().info("calling DELETE: %s", url)
    response = requests.delete(url, data=jsonpickle.encode(data))
    SimpleLogger.get_logger().info("status code: %s", response.status_code)
    return response