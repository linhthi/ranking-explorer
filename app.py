from flask import Flask, request, jsonify, make_response, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
import json

app = Flask(__name__, static_folder='FrontEnd/build')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:HT@linh83@localhost:3306/ranking'
db = SQLAlchemy(app)

f = open('examples.json',)
data = json.load(f)

###Models####
class Post(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.String(20), primary_key=True)
    user_id = db.Column(db.Integer)
    source = db.Column(db.String(100))
    content = db.Column(db.String)
    media = db.Column(db.String)
    create_time = db.Column(db.Integer)
    target = db.Column(db.String)

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
    def __init__(self, id, user_id, source, content, media, create_time, target):
        self.id = id
        self.user_id = user_id
        self.source = source
        self.content = content
        self.media = media
        self.create_time = create_time
        self.target = target
    def __repr__(self):
        return '' % self.id
db.create_all()


# Schema
class PostSchema(ModelSchema):
    class Meta(ModelSchema.Meta):
        model = Post
        sqla_session = db.session
    id = fields.String(required=True)
    user_id = fields.Number(required=True)
    source = fields.String(required=True)
    content = fields.String(required=True)
    media = fields.String(required=False)
    create_time = fields.Number(required=True)
    target = fields.String(required=True)


### Route

@app.route('/posts', methods = ['GET'])
def get_all_post():
    """ Get all post """

    get_posts = Post.query.all()
    post_schema = PostSchema(many=True)
    posts = post_schema.dump(get_posts)
    return make_response(jsonify({"posts": posts}))


@app.route('/posts/<id>', methods = ['GET'])
def get_post_by_id(id):
    """ Get post information by id"""

    get_post = Post.query.get(id)
    post_schema = PostSchema()
    post = post_schema.dump(get_post)
    return make_response(jsonify({"post": post}))


# @app.route('/posts/<id>', methods = ['PUT'])
# def update_post_by_id(id):
#     data = request.get_json()
#     get_post = Post.query.get(id)
#     if data.get('id'):
#         get_post.id = data['id']
#     if data.get('user_id'):
#         get_post.postDescription = data['postDescription']
#     if data.get('postBrand'):
#         get_post.postBrand = data['postBrand']
#     if data.get('price'):
#         get_post.price= data['price']
#     db.session.add(get_post)
#     db.session.commit()
#     post_schema = postSchema(only=['id', 'title', 'postDescription','postBrand','price'])
#     post = post_schema.dump(get_post)
#     return make_response(jsonify({"post": post}))


@app.route('/posts/<id>', methods = ['DELETE'])
def delete_post_by_id(id):
    """ This func tion to delete a post with id"""

    get_post = Post.query.get(id)
    db.session.delete(get_post)
    db.session.commit()
    return make_response("", 204)


@app.route('/posts', methods = ['POST'])
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


@app.route('/list_feed/user/<user_id>', methods = ['GET'])
def get_feeds_by_user_id(user_id):
    """ Get feeds by userId"""

    user_feed = [user_feed for user_feed in data if user_feed['user_id'] == user_id]

    if len(user_feed) == 0:
        return make_response(jsonify({'message': 'not found'}), 404)

    feeds_string = user_feed[0]['feeds']
    feeds = json.loads(feeds_string)
    return make_response(jsonify({'feeds': feeds}), 200)


@app.route('/ranking_feeds', methods = ['GET'])
def get_ranking_feed():
    """ Get all ranking feed """
    return make_response(jsonify({'ranking_feeds': data}), 200)


@app.route('/', methods = ['GET'])
def go_home():
    return send_from_directory( app.static_folder,'index.html')


if __name__ == "__main__":
    app.run(debug=True)
