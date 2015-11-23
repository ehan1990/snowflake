__author__ = 'ehan'
import requests
import jsonpickle
from common.simple_logger import SimpleLogger

def call_get_api(ip, api_url):
    url = "http://" + ip + api_url
    SimpleLogger.get_logger().info("calling GET: %s", url)
    response = requests.get(url)
    return response

def call_post_api(ip, api_url, data):
    url = "http://" + ip + api_url
    SimpleLogger.get_logger().info("calling POST: %s", url)
    response = requests.get(url, data=data)
    return response

if __name__ == "__main__":
    SimpleLogger.setup()
    s = call_get_api("192.168.0.79", "/api/v1/login")
    print s.status_code
    print s.reason
    print s.content