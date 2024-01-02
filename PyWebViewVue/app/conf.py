from app.tools.class_dict import Storage

g_conf = Storage()
g_conf.dev = True


def get_entrypoint():
    return 'tcp://0.0.0.0:4242'


