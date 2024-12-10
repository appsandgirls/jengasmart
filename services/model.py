import logging
from flask import Flask, request, jsonify
from flask_cors import CORS

# Create the Flask app
app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s: %(message)s')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data
        data = request.get_json()
        logging.info(f"Raw data from request: {data}")

        # Validate data
        if not isinstance(data, dict):
            raise ValueError("Invalid JSON format; expected a dictionary.")

        # Extract parameters
        size = data.get('size', 0)
        material_cost = data.get('material_cost', 0)
        location_factor = data.get('location_factor', 1)

        # Calculate estimated cost
        estimated_cost = (size * material_cost) + (location_factor * 1000)
        logging.info(f"Estimated cost: {estimated_cost}")

        return jsonify({"estimated_cost": estimated_cost}), 200
    except ValueError as ve:
        logging.error(f"ValueError: {ve}")
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        logging.exception("An unexpected error occurred")
        return jsonify({"error": "Server error"}), 500


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
