import webview
import mimetypes
import logging

import conf
from .conf import g_conf

logger = logging.getLogger(__name__)


def main():
    logger.debug(f"entry {conf.get_entrypoint()}")
    window = webview.create_window('py_web_view', conf.get_entrypoint(), min_size=(1200, 1200))
    webview.start(http_server=False, private_mode=False, debug=True)
