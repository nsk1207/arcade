<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  font-family: Verdana, sans-serif;
}

#game {
  width: 100%;
  max-width: 500px;
  height: 70%;
  display: flex;
  flex-direction: column;
}

#container {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
}

#board-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
}

#board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
} 

.square {
  border: 2px solid green;
  min-width: 50px;
  min-height: 50px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#keyboard-container {
  height: 200px;
}

.keyboard-row {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}

.keyboard-row button {
  font-family: inherit;
  font-weight: bold;
  height: 50px;
  cursor: pointer;
  background-color: black;
  color: white;
  flex-grow: 1;
  margin-right: 6px;
  user-select: none;
}

</style>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="container">
      <div id="game">
        <div id="board-container">
          <div id="board"></div>
        </div>
        <div id="keyboard-container">
          <div class="keyboard-row">
            <button data-key="a">a</button>
            <button data-key="b">b</button>
            <button data-key="c">c</button>
            <button data-key="d">d</button>
            <button data-key="e">e</button>
            <button data-key="f">f</button>
            <button data-key="g">g</button>
            <button data-key="h">h</button>
            <button data-key="i">i</button>
            <button data-key="j">j</button>
          </div>
          <div class="keyboard-row">
            <div class="spacer-half"></div>
            <button data-key="k">k</button>
            <button data-key="l">l</button>
            <button data-key="m">m</button>
            <button data-key="n">n</button>
            <button data-key="o">o</button>
            <button data-key="p">p</button>
            <button data-key="q">q</button>
            <button data-key="r">r</button>
            <button data-key="s">s</button>
            <div class="spacer-half"></div>
          </div>
          <div class="keyboard-row">
            <button data-key="enter" class="wide-button">Enter</button>
            <button data-key="t">t</button>
            <button data-key="u">u</button>
            <button data-key="v">v</button>
            <button data-key="w">w</button>
            <button data-key="x">x</button>
            <button data-key="y">y</button>
            <button data-key="z">z</button>
            <button data-key="del" class="wide-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

<!-- 
<script>
  const url = "http://nashcsp.duckdns.org/api/users/gen"
  //Options
  const options = {
    method: 'GET'
    mode: 'cors',
    cache: 'default',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    ;}
  };

// Fetch
fetch(url, options)
  .then(response => {
    if (response.status !==200) {
      error('GET API response failure: ' + response.status);
      return;
    }
    response.json().then(data => {
      for(const event of data) {
        document.getElementbyId(event.day+2).innerHTML = eventTitle
      }
    })
  })
.catch(err => {
  error(err + " " + url);
});

</script> -->

<script>
document.addEventListener("DOMContentLoaded", () => {
  createSquares();
  getNewWord();

  let guessedWords = [[]];
  let availableSpace = 1;

  let word;
  let guessedWordCount = 0;

  const keys = document.querySelectorAll(".keyboard-row button");

  function getNewWord() {
    fetch(
      `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=5&lettersMax=5`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "26d9a3c8fbmshd1c8fc32ca8acc3p190a69jsn54f737b8e33b",
        },
      }
    )
      .then((response) => {
        return response.json();
        console.log(response.json());
      })
      .then((res) => {
        word = res.word;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }

  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr();

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter);

      const availableSpaceEl = document.getElementById(String(availableSpace));

      availableSpace = availableSpace + 1;
      availableSpaceEl.textContent = letter;
    }
  }

  function getTileColor(letter, index) {
    const isCorrectLetter = word.includes(letter);

    if (!isCorrectLetter) {
      return "rgb(206, 206, 235)";
    }

    const letterInThatPosition = word.charAt(index);
    const isCorrectPosition = letter === letterInThatPosition;

    if (isCorrectPosition) {
      return "rgb(36, 222, 20)";
    }

    return "rgb(235, 197, 28)";
  }

  function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== 5) {
      window.alert("Word must be 5 letters");
    }

    const currentWord = currentWordArr.join("");

    fetch(`https://wordsapiv1.p.rapidapi.com/words/${currentWord}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "26d9a3c8fbmshd1c8fc32ca8acc3p190a69jsn54f737b8e33b",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }

        const firstLetterId = guessedWordCount * 5 + 1;
        const interval = 200;
        currentWordArr.forEach((letter, index) => {
          setTimeout(() => {
            const tileColor = getTileColor(letter, index);

            const letterId = firstLetterId + index;
            const letterEl = document.getElementById(letterId);
            letterEl.classList.add("animate__flipInX");
            letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
          }, interval * index);
        });

        guessedWordCount += 1;

        if (currentWord === word) {
          window.alert("You won!");
        }

        if (guessedWords.length === 6) {
          window.alert(`You lost! Reload to Play Again! The word was ${word}.`);
        }

        guessedWords.push([]);
      })
      .catch(() => {
        window.alert("We don't recognize that word!");
      });
  }

  function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);
    }
  }

  function handleDeleteLetter() {
    const currentWordArr = getCurrentWordArr();
    const removedLetter = currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterEl = document.getElementById(String(availableSpace - 1));

    lastLetterEl.textContent = "";
    availableSpace = availableSpace - 1;
  }

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "enter") {
        handleSubmitWord();
        return;
      }

      if (letter === "del") {
        handleDeleteLetter();
        return;
      }

      updateGuessedWords(letter);
    };
  }
});
</script>