from flask import Blueprint, make_response, jsonify, request
from app.schemas.post_schema import PostSchema
from app.models.post import Post
from app import db

post_api = Blueprint('posts', __name__)

@post_api.route('/posts', methods = ['GET'])
def get_all_post():
    """ Get all post """

    get_posts = Post.query.all()
    post_schema = PostSchema(many=True)
    posts = post_schema.dump(get_posts)
    return make_response(jsonify({"posts": posts}))


@post_api.route('/posts/<id>', methods = ['GET'])
def get_post_by_id(id):
    """ Get post information by id"""

    get_post = Post.query.get(id)
    post_schema = PostSchema()
    post = post_schema.dump(get_post)
    return make_response(jsonify({"post": post}))


@post_api.route('/posts/<id>', methods = ['DELETE'])
def delete_post_by_id(id):
    """ This func tion to delete a post with id """

    get_post = Post.query.get(id)
    db.session.delete(get_post)
    db.session.commit()
    return make_response("", 204)


@post_api.route('/posts', methods = ['POST'])
def create_post():
    """
    Create a new post
    Params: Post object
    """
    data = request.get_json()
    post_schema = PostSchema()
    post = post_schema.load(data)
    result = post_schema.dump(post.create())
    return make_response(jsonify({"post": result}), 200)