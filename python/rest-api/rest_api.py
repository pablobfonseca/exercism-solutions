import json


class RestAPI:
    def __init__(self, database=None):
        self.database = database

    def get(self, url, payload=None):
        if payload:
            payload = json.loads(payload)

        return json.dumps(dict(users=[]))

    def post(self, url, payload=None):
        if payload:
            a = json.loads(payload)

        return json.dumps(dict(name=a.get('user'), owes={}, owed_by={}, balance=0.0))
