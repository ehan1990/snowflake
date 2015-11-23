__author__ = 'ehan'

import unittest
from common.simple_logger import SimpleLogger
import service_request

class TestServiceRequest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        SimpleLogger.setup()

    def test_get(self):
        s = service_request.call_get_api("192.168.0.79", "/api/v1/login")
        print s.content

    def test_post(self):
        data = {
            "username": "ehan",
            "password": "admin@123"
        }
        s = service_request.call_post_api("192.168.0.79", "/api/v1/login", data)
        print s.content


if __name__ == "__main__":
    unittest.main()