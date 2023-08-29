import webview
from app import Api
import mimetypes
import logging

from .conf import g_conf

mimetypes.add_type("application/javascript", ".ts")
logger = logging.getLogger(__name__)


def get_entrypoint():
    if g_conf.dev:
        return 'http://localhost:3000'
    else:
        return '../web_gui/static/index.html'


def main():
    logger.debug(f"entry {get_entrypoint()}")
    api = Api()

    window = webview.create_window('py_web_view', get_entrypoint(), min_size=(1200, 1200), js_api=api)
    webview.start(http_server=False, private_mode=False, debug=True)
