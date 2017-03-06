__author__ = 'ehan'

import datetime
import jsonpickle
import traceback
from pymongo import MongoClient
from common.constants import *


class MongoService:

    client = None
    db = None
    logger = None

    @classmethod
    def init(cls):
        cls.client = MongoClient(DB_IP, 27017)
        cls.db = cls.client[DB_NAME]

    @classmethod
    def set_db(cls, name):
        cls.db = cls.client[name]

    @classmethod
    def close(cls):
        cls.client.close()

    @classmethod
    def delete_all_collections(cls):
        cls.client.drop_database(DB_NAME)

    @classmethod
    def insert(cls, name, data):
        try:
            cls.db[name].insert_one(data)
            return True
        except Exception:
            cls.logger.error(traceback.format_exc())
            return False

    @classmethod
    def get_all(cls, name):
        res = cls.db[name].find()
        arr = list(res)
        return arr

    @classmethod
    def delete_one(cls, name, query):
        try:
            cls.db[name].delete_one(query)
        except Exception:
            return False

    @classmethod
    def query(cls, name, limit=DEFAULT_LIMIT, page=DEFAULT_PAGE, order=DEFAULT_ORDER):
        try:
            res = cls.db[name].find({}, {"_id": 0}).sort([['_id', order]]).skip((page-1) * limit).limit(limit)
            arr = list(res)
            return arr
        except Exception:
            cls.logger.error(traceback.format_exc())
            return None

    @classmethod
    def search(cls, name, search=DEFAULT_SEARCH, limit=DEFAULT_LIMIT, page=DEFAULT_PAGE, order=DEFAULT_ORDER):
        try:
            data = []
            res = cls.db[name].find({"name": {'$regex': '.*' + search + '.*'}}, {"_id": 0}).sort([['_id', order]]).skip((page-1) * limit).limit(limit)
            arr = list(res)
            return data
        except Exception:
            cls.logger.error(traceback.format_exc())
            return None

    @classmethod
    def count(cls, name, match):
        try:
            res = cls.db[name].find(match, {"_id": 0}).count()
            return res
        except Exception:
            cls.logger.error(traceback.format_exc())
            return None

