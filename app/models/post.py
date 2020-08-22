from app import db

class Post(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.String(20), primary_key=True)
    user_id = db.Column(db.Integer)
    source = db.Column(db.String(100))
    content = db.Column(db.String)
    media = db.Column(db.String)
    create_time = db.Column(db.Integer)
    target = db.Column(db.String)