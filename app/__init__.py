from flask import Flask, request, jsonify, make_response, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from config.config import Config

app = Flask(__name__, static_folder='frontend/build')
app.config.from_object(Config)
db = SQLAlchemy(app)

from app.api.post_api import post_api
from app.api.ranking_api import ranking_api

app.register_blueprint(post_api)
app.register_blueprint(ranking_api)

db.create_all()

