import os
import yaml

basedir = os.path.abspath(os.path.dirname(__file__))
with open('./config/test.yaml') as f:
    data = yaml.load(f, Loader=yaml.FullLoader)

MYSQL_DATABASE = data.get('mysql.database')
MYSQL_HOST = data.get('mysql.host')
MYSQL_USER = data.get('mysql.username')
MYSQL_PASSWORD = data.get('mysql.password')
MYSQL_PORT = data.get('mysql.port')

# class Config(object):
#     SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{0}:{1}@{2}:{3}/{4}'.format(
#         MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE
#     )
#     SQLALCHEMY_TRACK_MODIFICATIONS = False

class Config(object):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///ranking.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False