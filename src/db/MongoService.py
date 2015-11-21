__author__ = 'ehan'

import jsonpickle
from pymongo import MongoClient
from pymongo import Connection
from common.constants import *

class MongoService():

    def __init__(self, name):
        self.client = MongoClient('192.168.0.79', 27017)

    def create_db(self, name):
        connection = Connection()
        self.db = connection[name]

    def create_collection(self, name):
        self.db = self.db[name]

    def delete_db(self, name):
        connection = Connection()
        connection.drop_database(name)

def main():
    mongo_service = MongoService(DB_NAME)
    mongo_service.delete_db(DB_NAME)
    mongo_service.create_db(DB_NAME)
    mongo_service.create_collection("devices")
    m = {
        "data": "foobar"
    }
    result = mongo_service.db.devices.insert(m)
    q = mongo_service.db.devices.find()
    for a in q:
        print a


if __name__ == "__main__":
    main()