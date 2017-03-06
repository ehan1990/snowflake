import logging
from logging.handlers import RotatingFileHandler

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s [%(filename)s:%(lineno)d] %(message)s',
                    datefmt='%b %d %Y %H:%M:%S')

class SimpleLogger:

    simple_logger = None

    @classmethod
    def setup(cls, process_name, file_dir="/preserve/logs"):
        cls.process_name = process_name
        cls.simple_logger = logging.getLogger(process_name)
        filepath = "{}/{}.log".format(file_dir, process_name)
        handler = RotatingFileHandler(filepath, maxBytes=1024*1024*5, backupCount=5)
        formatter = logging.Formatter('%(asctime)s [%(filename)s:%(lineno)d] %(message)s', datefmt='%b %d %Y %H:%M:%S')
        handler.setFormatter(formatter)
        cls.simple_logger.addHandler(handler)
        cls.simple_logger.setLevel(logging.INFO)
        cls.get_logger().info("initializing simple logger...")
        return cls.simple_logger

    @classmethod
    def get_logger(cls):
        return cls.simple_logger