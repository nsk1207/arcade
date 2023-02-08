def adjust_difficulty(score):
    difficulty = 1
    if score >= 100:
        difficulty = 2
    if score >= 500:
        difficulty = 3
    if score >= 1000:
        difficulty = 4
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
