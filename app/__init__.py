__author__ = 'tauren'

__author__ = 'tauren'

from flask import Flask, jsonify, send_file
import requests
import xmltodict

def create_app():

    app = Flask(__name__)
    # app.config.from_object('config')

    @app.route('/')
    def index():
        return send_file('static/index.html')

    @app.route('/tsunamis')
    def tsunamis():
        # Data Source: http://wcatwc.arh.noaa.gov/cap/v1.1/WEAK53CAP.xml
        response = requests.get('http://wcatwc.arh.noaa.gov/cap/v1.1/WEAK53CAP.xml')
        xml_dict = xmltodict.parse(response.text)

        json_data = {'results': []}
        if not isinstance(xml_dict['alert']['info'], list):
           data = {}
           data['event_type'] = xml_dict['alert']['info']['event']
           data['description'] = xml_dict['alert']['info']['description']
           data['certainty'] = xml_dict['alert']['info']['certainty']

           for pair in xml_dict['alert']['info']['parameter']:
               if pair['valueName'] == 'EventLatLon':
                   lat, lon = pair['value'].split(',')
                   data['origin'] = {'lat': lat, 'lon': lon.split(' ')[0]}

           json_data['results'].append(data)

        else:
            for event in xml_dict['alert']['info']:
               pass

        return jsonify(json_data)

    return app
