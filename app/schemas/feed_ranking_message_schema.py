from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from app import db
from app.models.feed_ranking_message import Feed_Ranking_Message

class FeedRankingMessageSchema(ModelSchema):
    class Meta(ModelSchema.Meta):
        model = Feed_Ranking_Message
        sqla_session = db.session

    user_id = fields.String(required=True)
    request_timestamp = fields.String(required=True)
    response_timestamp = fields.String(required=True)
    treatment = fields.String(required=True)
    provider = fields.String(required=True)
    feeds = fields.String(required=True)
    ranking_metatadata = fields.String(required=True)