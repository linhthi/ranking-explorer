from app import db

class Post(db.Model):
    """ Model Post to contain information of a post """

    __tablename__ = "posts"
    id = db.Column(db.String(20), primary_key=True)
    user_id = db.Column(db.Integer)
    source = db.Column(db.String(100))
    content = db.Column(db.Text)
    media = db.Column(db.Text)
    create_time = db.Column(db.BigInteger)
    target = db.Column(db.Text)

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
