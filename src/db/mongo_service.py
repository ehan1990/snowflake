__author__ = 'ehan'

import datetime
import jsonpickle
import traceback
import pymongo
from pymongo import MongoClient
from common.constants import *
from common.simple_logger import SimpleLogger

#db.testresult.find({}, {"testcase_result_list":0}).pretty()

class MongoService():

    client = None
    db = None
    logger = None

    @classmethod
    def init(cls, logger):
        cls.logger = logger
        cls.logger.info("initializing db service...")
        cls.client = MongoClient(DB_IP, 27017)
        cls.db = cls.client[DB_NAME]
        cls.logger.info("finished initializing db service")

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
        except:
            cls.logger.error(traceback.format_exc())
            return False

    @classmethod
    def get_all(cls, name):
        res = cls.db[name].find()
        return res

#
    @classmethod
    def query(cls, name, limit=5, page=1, match={}, order=-1):
        try:
            data = []
            res = cls.db[name].find(match, {"_id": 0}).sort([['_id', order]]).skip((page-1) * limit).limit(limit)
            for r in res:
                data.append(r)
            return data
        except:
            cls.logger.error(traceback.format_exc())
            return None

    @classmethod
    def get(cls, name, match={}):
        try:
            data = []
            res = cls.db[name].find(match)
            for r in res:
                data.append(r)
            return data
        except:
            cls.logger.error(traceback.format_exc())
            return None

    @classmethod
    def import_from_json(cls, path, table):
        cls.logger.info("importing from %s path to %s table", path, table)
        f = open(path, 'r')
        s = f.read()
        f.close()
        data = jsonpickle.decode(s)
        for d in data:
            d["created_at"] = datetime.datetime.utcnow().isoformat()[0:16] + "Z"
            cls.insert(table, d)
        cls.logger.info("done")

def import_data():
    # MongoService.import_from_json(RESOURCE + "/system_stats.json", DB_SYSTEM_STATS)
    MongoService.import_from_json(RESOURCE + "/mysql_list.json", DB_TEST)
    MongoService.import_from_json(RESOURCE + "/mgmt_console_list.json", DB_MGMT_CONSOLES)

def reset():
    MongoService.delete_all_collections()

def main(logger):
    MongoService.init(logger)
    reset()
    import_data()

if __name__ == "__main__":
    logger = SimpleLogger.setup(file_path="/home/ehan/logs/mongo_service.log", process_name="DB_INIT")
    main(logger)
