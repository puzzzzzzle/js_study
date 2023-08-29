import webview


class Api:

    def toggle_fullscreen(self):
        webview.windows[0].toggle_fullscreen()
