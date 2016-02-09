__author__ = 'ehan'

import unittest
from common.simple_logger import SimpleLogger
from common.constants import *
import service_request

class TestServiceRequest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        SimpleLogger.setup()

    def test_get(self):
        s = service_request.call_api("http://", "127.0.0.1", "/api/v1", GET)
        print s.content
        print s.status_code

    def test_post(self):
        data = {
            "username": "ehan",
            "password": "admin@123"
        }
        s = service_request.call_api("http://", "192.168.0.79", + "/api", POST, data=data)
        print s.content


if __name__ == "__main__":
    unittest.main()