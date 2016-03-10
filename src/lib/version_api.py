__author__ = 'ehan'

import subprocess
from flask import Blueprint
from common.constants import *
from common import response_builder

version_api = Blueprint("version_api", __name__)

@version_api.route(ROOT_API + "/version", methods=['GET'])
def api_get_version():
    branch = subprocess.check_output(['git', 'rev-parse', '--symbolic-full-name', '--abbrev-ref', 'HEAD']).strip('\n')
    version_num = subprocess.check_output(['git', 'rev-list', 'HEAD', '--count']).strip('\n')
    m = {
        "version": version_num,
        "branch": branch
    }
    return response_builder.build_raw_response(data=m)