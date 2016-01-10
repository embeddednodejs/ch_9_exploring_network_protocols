# firmata or localhost
# server=http://localhost:4000/LED
# edison
server=http://edison.local:4000/LED

on:
	curl -X POST -d '{"led": 1}' $(server)

off:
	curl -X POST -d '{"led": 0}' $(server)

