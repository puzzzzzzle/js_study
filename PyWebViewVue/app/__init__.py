__all__ = ["Api", "main", "conf"]

import logging
from .app import Api
from .main import main
from . import conf

LOG_LEVEL = logging.DEBUG
LOG_FORMATE = '|%(asctime)s|%(name)s|%(levelname)s|%(message)s'
logging.basicConfig(level=LOG_LEVEL, format=LOG_FORMATE)
# if not need root log, open this
# logging.getLogger().handlers.clear()
