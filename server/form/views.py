from django.http import HttpResponse
import json


def home(request):
    return HttpResponse(json.dumps({'message': 'Homepage', 'status': 200}))


def api(request):
    # request_body = request.body.decode("utf-8")
    request_body = json.loads(request.body.decode("utf-8"))
    print(request_body['message'])
    return HttpResponse(json.dumps({'message': 'api route'}))
