from flask import Blueprint, make_response, jsonify, request
import json
from app import db
from app.models.feed_ranking_message import Feed_Ranking_Message
from app.schemas.feed_ranking_message_schema import FeedRankingMessageSchema

f = open('examples.json',)
data = json.load(f)

ranking_api = Blueprint('ranking_api', __name__)

### Router
@ranking_api.route('/list_feed/user/<user_id>', methods = ['GET'])
def get_feeds_by_user_id(user_id):
    """ Get feeds by userId """

    rankings = get_all_ranking()

    user_feed = [user_feed for user_feed in rankings if user_feed['user_id'] == user_id]
    if len(user_feed) == 0:
        return make_response(jsonify({'message': 'not found'}), 404)

    feeds_string = user_feed[0]['feeds']
    feeds = json.loads(feeds_string)
    return make_response(jsonify({'feeds': feeds}), 200)


@ranking_api.route('/ranking_feeds/user/<user_id>', methods = ['GET'])
def get_ranking_feeds_by_user_id(user_id):
    """ Get feeds by userId """

    rankings = get_all_ranking()

    user_feeds = [user_feed for user_feed in rankings if user_feed['user_id'] == user_id]
    if len(user_feeds) == 0:
        return make_response(jsonify({'message': 'not found'}), 404)

    return make_response(jsonify(
        {
            'feeds': user_feeds,
            'user_id': user_id
        }), 200)


@ranking_api.route('/ranking_feeds/reqts/<ts>', methods = ['GET'])
def get_ranking_feeds_by_reqts(ts):
    """ 
    Get feeds ranking request by timestamp
    Return all feeds ranking request has request_timestamp < ts
    """

    rankings = get_all_ranking()

    user_feeds = [user_feed for user_feed in rankings if int(user_feed['request_timestamp']) <= int(ts)]
    if len(user_feeds) == 0:
        return make_response(jsonify({'message': 'not found'}), 404)

    return make_response(jsonify({'feeds': user_feeds}), 200)


@ranking_api.route('/ranking_feeds', methods = ['GET'])
def get_ranking_feed():
    """ Get all ranking feed """

    rankings = get_all_ranking()
    return make_response(jsonify({'ranking_feeds': rankings}), 200)
    

@ranking_api.route('/ranking_feeds', methods = ['POST'])
def create_ranking_feed():
    """ Create a ranking feed """
    
    data = request.get_json()
    ranking_schema = FeedRankingMessageSchema()
    ranking = ranking_schema.load(data)
    result = ranking_schema.dump(ranking.create())
    return make_response(jsonify({"ranking": result}), 200)


def get_all_ranking():
    """ Get all ranking request """

    get_ranking_feeds = Feed_Ranking_Message.query.all()
    ranking_schema = FeedRankingMessageSchema(many=True)
    return ranking_schema.dump(get_ranking_feeds)
