from lorem_text import lorem
import requests
import random
import time
import calendar
import json

API_ENDPOINT = 'http://localhost:5000/posts'


def genarate_posts(start_idx, number_of_post):
    """ Genarate more post """
    for i in range(number_of_post):
        id = 'abc' + str(i + start_idx)
        user_id = random.randint(102, 255)
        source = ''
        if i % 3 == 1 :
            source = 'group:' + str(random.randint(123, 456))
        elif i % 3 == 2 :
            source = 'page:' + str(random.randint(234, 567))
        else:
            source = ''
        content = lorem.paragraph()
        create_time = calendar.timegm(time.gmtime()) + i
        if i % 2:
            target = 'friends'
        else:
            target = 'public'
        
        post = {
            'id': id,
            'user_id': user_id,
            'source': source,
            'content': content,
            'media': '',
            'create_time': create_time,
            'target': target,
        }
       
        print(json.dumps(post))
        r = requests.post(url=API_ENDPOINT, json=post)
        print(r.status_code, r.reason)



if __name__ == '__main__':
    num_posts = 200
    start_idx = 316
    genarate_posts(start_idx, num_posts)

        