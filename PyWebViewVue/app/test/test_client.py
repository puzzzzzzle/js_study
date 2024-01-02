import zerorpc
import app.conf as conf

c = zerorpc.Client()
c.connect("tcp://127.0.0.1:4242")
print(c.add_42("11"))

import zerorpc.cli as cli

cli.run_client(cli.parser.parse_args(["tcp://127.0.0.1:4242", "add_42", "4"]))
