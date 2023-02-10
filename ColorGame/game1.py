def adjust_difficulty(score):
    difficulty = 50
    if score >= 100:
        difficulty = 40
    if score >= 500:
        difficulty = 30
    if score >= 1000:
        difficulty = 20
    return difficulty

from flask import Flask, request

app = Flask(__name__)

scores = {}

@app.route("/score", methods=["POST"])
def update_score():
    player_id = request.form["player_id"]
    score = int(request.form["score"])
    scores[player_id] = score
    return "Score updated for player {}".format(player_id)

@app.route("/score/<player_id>", methods=["GET"])
def get_score(player_id):
    if player_id in scores:
        return str(scores[player_id])
    else:
        return "Player not found", 404

if __name__ == "__main__":
    app.run()


# To incorporate the REST API into my game code, I made API calls to update and retrieve the player's score. 
# The API provides two routes: /score for updating the score and /score/<player_id> for retrieving the score.
# Here's how I API calls in Python using the requests library:



import requests

def update_score(player_id, score):
    response = requests.post("http://localhost:5000/score", data={"player_id": player_id, "score": score})
    if response.status_code == 200:
        print("Score updated for player {}".format(player_id))
    else:
        print("Failed to update score: {}".format(response.text))

def get_score(player_id):
    response = requests.get("http://localhost:5000/score/{}".format(player_id))
    if response.status_code == 200:
        return int(response.text)
    elif response.status_code == 404:
        print("Player not found")
        return None
    else:
        print("Failed to retrieve score: {}".format(response.text))
        return None

