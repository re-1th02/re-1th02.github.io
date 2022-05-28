from flask import Flask, jsonify
from flask_restful import Resource, Api
from json import *
from flask_cors import CORS, cross_origin


app = Flask(__name__)

@app.route('/')
@cross_origin()
def hello_world():
    jsonResp = {'hello': 'hi'}
    return jsonify(jsonResp)
  

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask, jsonify

# from flask_cors import cross_origin
# import pymysql
# import json
# import os
# from dotenv import load_dotenv
# import logging




# APP_ROOT = os.path.join(os.path.dirname(__file__), '..')   # refers to application_top
# dotenv_path = os.path.join(APP_ROOT, '.env')
# load_dotenv(dotenv_path)

# mysql_host = os.getenv("DB_HOST")
# mysql_port = os.getenv("DB_PORT")
# mysql_dbname = os.getenv("DB_DATABASE")
# mysql_user = os.getenv("DB_USERNAME")
# mysql_password = os.getenv("DB_PASSWORD")

# connection = None
# CONNECTION_TIMEOUT = 5000

# print(mysql_host)
# print(mysql_port)
# print(mysql_dbname)
# print(mysql_user)

# def connect_db():


#   connection = pymysql.connect(host=mysql_host, user=mysql_user, port=int(mysql_port), password=mysql_password, database=mysql_dbname, connect_timeout=CONNECTION_TIMEOUT)
#   print("connected to db")
#   return connection

  
# def get_cursor(connection): 
#   connection.ping(reconnect=True)
#   return connection.cursor()

# app = Flask(__name__)

# @app.route('/')
# @cross_origin()
# def hello_world():
#     connection = connect_db()
#     cur = connection.cursor()
#     getUser = "SELECT * FROM users"
#     cur.execute(getUser)
#     results = cur.fetchone()
#     jsonResp = {'hello': 'world', 'results': results}
#     return jsonify(jsonResp)
#     #return jsonResp

# if __name__ == '__main__':
#     app.run(debug=False)
