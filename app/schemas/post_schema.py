from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from app import db
from app.models.post import Post

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