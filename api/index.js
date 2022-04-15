const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const wordsFile = require("./data/words.json");
const words = Object.keys(wordsFile);

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.get("/api/words", (req, res) => {
  res.json(words);
});

app.get("/api/words/:word", (req, res) => {
  const word = req.params.word;
  if (words.includes(word)) {
    res.json(words[word]);
  } else {
    res.status(404).json({ error: "Word not found" });
  }
});

app.get("/api/letter/:letter", (req, res) => {
  const letter = req.params.letter;
  if (letter.length > 1) {
    res.status(400).json({ error: "Please provide a single letter" });
  } else {
    const wordsWithLetter = words.filter((word) => {
      return word.startsWith(letter);
    });
    res.json({ letter, words: wordsWithLetter });
  }
});

app.get("/api/anagrams/:word", (req, res) => {
  const word = req.params.word;
  if (word.length < 3) {
    res.status(400).json({
      error: "Word must be at least 3 characters long",
    });
  } else {
    const anagrams = words.filter((w) => {
      return w.split("").sort().join("") === word.split("").sort().join("");
    });
    res.json({ word, anagrams });
  }
});

app.get("/api/random", (req, res) => {
  const randomWordIndex = Math.floor(Math.random() * words.length);
  const randomLetterIndex = Math.floor(
    Math.random() * words[randomWordIndex].length
  );
  const letter = words[randomWordIndex][randomLetterIndex];
  const word = words[randomWordIndex];
  res.json({ letter, word });
});

app.get("/api/stats", (req, res) => {
  const total = words.length;
  const byLetter = {};
  const posibleWords = {};
  words.forEach((word) => {
    word.split("").forEach((letter) => {
      if (!posibleWords[letter]) {
        posibleWords[letter] = 1;
      } else {
        posibleWords[letter] += 1;
      }
    });
  });

  const shortest = words.reduce((a, b) => {
    return a.length < b.length ? a : b;
  });

  const longest = words.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(i + 97);
    const wordsWithLetter = words.filter((word) => {
      return word.startsWith(letter);
    });
    byLetter[letter] = wordsWithLetter.length;
  }
  const mostCommonLetters = Object.keys(posibleWords).sort(
    (a, b) => posibleWords[b] - posibleWords[a]
  );
  res.json({
    total,
    byLetter,
    posibleWords,
    mostCommonLetters,
    shortest,
    longest,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
