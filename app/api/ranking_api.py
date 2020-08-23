from flask import Blueprint, make_response, jsonify, request
import json
from app import db

f = open('examples.json',)
data = json.load(f)

ranking_api = Blueprint('ranking_api', __name__)

### Router
@ranking_api.route('/list_feed/user/<user_id>', methods = ['GET'])
def get_feeds_by_user_id(user_id):
    """ Get feeds by userId"""

    user_feed = [user_feed for user_feed in data if user_feed['user_id'] == user_id]

    if len(user_feed) == 0:
        return make_response(jsonify({'message': 'not found'}), 404)

    feeds_string = user_feed[0]['feeds']
    feeds = json.loads(feeds_string)
    return make_response(jsonify({'feeds': feeds}), 200)


@ranking_api.route('/ranking_feeds', methods = ['GET'])
def get_ranking_feed():
    """ Get all ranking feed """
    return make_response(jsonify({'ranking_feeds': data}), 200)