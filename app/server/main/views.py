# app/server/main/views.py

#################
#### imports ####
#################

import os
from flask import render_template, Blueprint, request, Flask

################
#### config ####
################

main_blueprint = Blueprint('main', __name__,)

################
#### routes ####
################

@main_blueprint.route('/')
def home():
    return render_template('main/index.html')
