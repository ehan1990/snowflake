from common.constants import *

class RequestModel:

    def __init__(self, req):
        page = req.args.get("page")
        limit = req.args.get("limit")
        order = req.args.get("order")
        match = req.args.get("match")
        search = req.args.get("search")

        if page is not None:
            self.page = int(page)
        else:
            self.page = DEFAULT_PAGE
        if limit is not None:
            self.limit = int(limit)
        else:
            self.limit = DEFAULT_LIMIT
        if order is not None:
            self.order = int(order)
        else:
            self.order = DEFAULT_ORDER
        if match is not None:
            self.match = DEFAULT_MATCH
        else:
            self.match = DEFAULT_MATCH
        if search is not None:
            self.search = str(search)
        else:
            self.search = ""
