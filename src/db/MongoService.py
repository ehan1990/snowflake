__author__ = 'ehan'

import jsonpickle
from pymongo import MongoClient
from pymongo import Connection
from common.constants import *

class MongoService():

    def __init__(self):
        self.client = MongoClient('192.168.0.79', 27017)

    def set_db(self, name):
        connection = Connection()
        self.db = connection[name]

    def delete_db(self, name):
        connection = Connection()
        connection.drop_database(name)

    def create_collection(self, name):
        self.db = self.db[name]

    def get_all(self, name):
        res = self.db[name].find()
        return res

def main():
    mongo_service = MongoService()
    mongo_service.set_db(DB_NAME)

if __name__ == "__main__":
    main()