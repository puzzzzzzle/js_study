import logging
import conf

logger = logging.getLogger(__name__)


class Api:
    def add_42(self, n):
        """ Add 42 to an integer argument to make it cooler, and return the
        result. """
        logger.debug(f"call {n}")
        return f"add result {42 + int(n)}"


if __name__ == '__main__':
    import zerorpc

    server = zerorpc.Server(Api())
    server.bind(conf.get_entrypoint())
    server.run()
