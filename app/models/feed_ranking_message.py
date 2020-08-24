from app import db

class Feed_Ranking_Message(db.Model):
    """ Model Post to contain information of a post """

    __tablename__ = "feed_ranking_messages"
    id = db.Column(db.Integer, primary_key= True, autoincrement=True)
    user_id = db.Column(db.String(15))
    request_timestamp = db.Column(db.String(13))
    response_timestamp = db.Column(db.String(13))
    treatment = db.Column(db.Text)
    provider = db.Column(db.Text)
    existing_ids = db.Column(db.Text)
    feeds = db.Column(db.Text)
    ranking_metatadata = db.Column(db.Text)

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
        
    def __init__(self, user_id, request_timestamp, response_timestamp, treatment, provider, existing_ids, feeds, ranking_metatadata):
        self.user_id = user_id
        self.request_timestamp = request_timestamp
        self.response_timestamp = response_timestamp
        self.treatment = treatment
        self.provider = provider
        self.existing_ids = existing_ids
        self.feeds = feeds
        self.ranking_metatadata = ranking_metatadata

    def __repr__(self):
        return '' % self.id
