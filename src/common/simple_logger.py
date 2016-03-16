import logging
from logging.handlers import RotatingFileHandler

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s [%(filename)s:%(lineno)d] %(message)s',
                    datefmt='%b %d %Y %H:%M:%S')

class SimpleLogger:

    simple_logger = None
    is_setup = False

    @classmethod
    def setup(cls, file_path="/preserve/logs/whistler/snowflake.log", process_name="DEFAULT_NAME"):
        cls.simple_logger = logging.getLogger(process_name)
        handler = RotatingFileHandler(file_path, maxBytes=1024*1024*5, backupCount=2)
        formatter = logging.Formatter('%(asctime)s [%(filename)s:%(lineno)d] %(message)s', datefmt='%b %d %Y %H:%M:%S')
        handler.setFormatter(formatter)
        cls.simple_logger.addHandler(handler)
        cls.simple_logger.setLevel(logging.INFO)
        cls.is_setup = True
        cls.get_logger().info("initializing simple logger...")
        return cls.simple_logger

    @classmethod
    def get_logger(cls):
        if cls.is_setup is False:
            cls.setup()
        return cls.simple_logger