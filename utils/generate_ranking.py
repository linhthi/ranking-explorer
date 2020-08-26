import random
import calendar
import time
import requests
import json

URL='http://localhost:5000/ranking_feeds'

def genarate_ranking_feeds():
    """ Genarate ranking feed messages """

    user_id = str(random.randint(100, 255))
    reuqest_time = str(calendar.timegm(time.gmtime()) - random.randint(0, 1000))
    response_time = str(calendar.timegm(time.gmtime()) + random.randint(0, 1000))
    treatment = "testv1"
    provider = "testv1"
    existing_list = []
    feeds = []
    feeds_number = random.randint(3, 20)
    for i in range(feeds_number):
        post_id = 'abc' + str(random.randint(100, 515))
        r = requests.get('http://localhost:5000/posts/{0}'.format(post_id))
        post = r.json().get('post')
        max_score = 900
        cr = 0.01
        p = 6.000
        t = 10.00
        if post.get('user_id') == user_id:
            existing_list.append(post_id)
            feed = {
                "id": post_id,
                "score": max_score - random.randint(0, feeds_number),
                "source": None
            }
        else :
            feed = {
                "id": post_id,
                "score": max_score - random.randint(0, feeds_number),
                "source": post.get('source'),
                'cr': cr,
                "p": p - random.random(),
                "t": t - random.random()
            }
        feeds.append(feed)
    
    ranking_feeds = {
        "user_id": user_id,
        "request_timestamp": reuqest_time,
        "response_timestamp": response_time,
        "treatment": json.dumps(treatment),
        "provider": json.dumps(provider),
        "existing_ids": json.dumps(existing_list),
        "feeds": json.dumps(feeds),
        "ranking_metatadata": ""
    }

    print(json.dumps(ranking_feeds))
    res = requests.post(url=URL, json=ranking_feeds)
    print(res.status_code, res.reason)



if __name__ == '__main__':
    number_req_ranking = 100
    for _ in range(number_req_ranking):
        genarate_ranking_feeds()
