__author__ = 'ehan'

import jsonpickle
from pymongo import MongoClient
from common.constants import *

class MongoService():

    client = None

    def __init__(self):
        self.client = MongoClient(DB_IP, 27017)

    def set_db(self, name):
        self.db = self.client[name]

    def delete_db(self, name):
        connection = self.client[name]
        connection.drop_database(name)

    def insert(self, name, data):
        self.db[name].insert_one(data)

    def get_all(self, name):
        res = self.db[name].find()
        return res

def create_from_empty():
    mongo_service = MongoService()
    mongo_service.set_db(DB_NAME)
    f = open("resource/mock_user.json", "r")
    s = f.read()
    data = jsonpickle.decode(s)

    for d in data:
        mongo_service.insert("foobar", d)

def main():
    create_from_empty()

if __name__ == "__main__":
    main()