import os

import json

import pandas as pd
import numpy as np
import pymongo

from flask import Flask, jsonify, render_template

from scrape_plastic import scrape

app = Flask(__name__)

###########################################################################

conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

###########################################################################

doc = scrape()

db = client.P5

db.plastic_news.drop()

db.plastic_news.insert(doc)


###########################################################################

#################################################
# Routes
#################################################

@app.route("/")
def index():
    document = db.plastic_news.find()[0]
    return render_template("index.html", dict = document)


@app.route("/countryData")
def countryData():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    
    db = client.P5
    features = []
    countries = db.countries.find()
    for country in countries: 
        del country['_id']
        features.append(country)
    geojson = {"type": "FeatureCollection", "features": features}

    return jsonify(geojson)

@app.route("/countryData/<countr>")
def countryDataCountry(countr):
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    
    db = client.P5

    features = []
    countries = db.countries.find({"properties.ADMIN":countr})
    for country in countries:
        del country['_id']
        features.append(country)
    geojson2 = {"type": "FeatureCollection", "features": features}

    return jsonify(geojson2)
    
       

if __name__ == "__main__":
    app.run(debug=True)
