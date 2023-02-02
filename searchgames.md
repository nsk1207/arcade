<div id="game">
  <p>Guess The Word!: <span id="display"></span></p>
  <input type="text" id="guess" onkeypress="handleKeyPress(event)">
  <button onclick="checkGuess()">Submit</button>
  <button onclick="generateWord()">New Word</button>
  <p id="result"></p>
</div>

<style>
#game {
  text-align: center;
}

#word {
  font-size: 30px;
}

#guess {
  font-size: 20px;
  margin: 20px;
}

button {
  font-size: 25px;
  margin: 20px;
  background-color: #005A9C;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #005A9C; 
}

#result {
  font-size: 20px;
  margin: 20px;
}
</style>

<script>
let word = "";
let hintIndex = 0;

function generateWord() {
    // Fetch a new word from the API
    fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(response => response.json())
        .then(data => {
            word = data[0];
            hintIndex = 0;
            // hide the word to be guessed
            let hiddenWord = "";
            for (let i = 0; i < word.length; i++) {
                hiddenWord += "_";
            }
            document.getElementById("display").innerHTML = hiddenWord;
            document.getElementById("guess").value = "";
            document.getElementById("result").innerHTML = "";
        });
}

function checkGuess() {
    // Check if the guess is correct
    let guess = document.getElementById("guess").value;
    if (guess === word) {
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
        giveHint();
    }
}

function giveHint() {
    // reveal one letter of the word
    let hiddenWord = document.getElementById("display").innerHTML;
    let hintWord = hiddenWord.split("");
    hintWord[hintIndex] = word[hintIndex];
    hintIndex++;
    document.getElementById("display").innerHTML = hintWord.join("");
}

function handleKeyPress(event) {
    // Check the guess when the user presses Enter
    if (event.key === "Enter") {
        checkGuess();
    }
}

// Initialize the game with a word
generateWord();

</script>