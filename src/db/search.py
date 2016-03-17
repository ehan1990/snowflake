import pymongo

client = pymongo.MongoClient()
db = client['snowflake']
collection = db["collections"]

# collection.insert({"textfield": "cool stuff in a doc"})
# collection.insert({"textfield": "cool stuff in a doc"})
# collection.insert({"textfield": "cool stuff in a doc"})
# collection.insert({"textfield": "cool stuff in a doc"})
# collection.insert({"textfield": "cool stuff in a doc"})
# collection.insert({"textfield": "cools stuff in a doc"})
# collection.create_index([('textfield', 'text')])
#
res = collection.find({"name": {'$regex': '.*' + 'an' + '.*'}})
for r in res:
    print r