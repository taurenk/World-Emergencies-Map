__author__ = 'tauren'

from flask import Flask
import requests

def create_app():

    app = Flask(__name__)
    # app.config.from_object('config')

    @app.route('/')
    def hello_world():
        return 'Hello World!'

    @app.route('/test')
    def test():
        data = requests.get('http://wcatwc.arh.noaa.gov/cap/v1.1/WEAK53CAP.xml')
        return data.text

    return app

app = create_app()
app.run(debug=True)