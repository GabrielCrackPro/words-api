# Words API

[![GitHub license](https://img.shields.io/github/license/GabrielCrackPro/words-api?style=flat-square)](https://github.com/GabrielCrackPro/words-api/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/GabrielCrackPro/words-api/pulls)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=words-api-app&style=flat-square)

An API with lots of words.

Words are from [english words github repository](https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json).

## Base URL

```
https://words-api-app.herokuapp.com/
```

## Endpoints

### Get all words

```
GET /api/words
```

- Response example

```json
[
  "a",
  "aa",
  "aaa",
  "aah",
  "aahed",
  "aahing",
  "aahs",
  "aal",
  "aalii",
  "aaliis",
  "aals",
  "aam",
  "aani",
  "aardvark",
  "aardvarks",
  "aardwolf",
  "aardwolves",
  "aargh",
  "aaron",
  "aaronic",
  "aaronical",
  "aaronite",
  "aaronitic",
  "aarrgh",
  "aarrghh",
  "aaru",
  "aas",
  "aasvogel",
  "aasvogels",
  "ab",
  "aba",
  "ababdeh",
  "ababua",
  "abac",
  "abaca",
  "abacay",
  "abacas",
  "abacate",
  "abacaxi",
  "abaci",
  "..."
]
```

### Get a single word

```
GET /api/words/:word
```

- Response example

```json
{
  "word": "car"
}
```

### Get words that start with a letter

```
GET /api/letter/:letter
```

- Response example

```json
{
  "letter": "a",
  "words": [
    "a",
    "aa",
    "aaa",
    "aah",
    "aahed",
    "aahing",
    "aahs",
    "aal",
    "aalii",
    "aaliis",
    "aals",
    "aam",
    "aani",
    "aardvark",
    "aardvarks",
    "aardwolf",
    "aardwolves",
    "aargh",
    "aaron",
    "aaronic",
    "aaronical",
    "aaronite",
    "aaronitic",
    "aarrgh",
    "aarrghh",
    "aaru",
    "aas",
    "aasvogel",
    "aasvogels",
    "ab",
    "aba",
    "ababdeh",
    "ababua",
    "abac",
    "..."
  ]
}
```

### Get the anagrams of a word

```
GET /api/anagrams/:word
```

- Response example

```json
{
  "word": "car",
  "anagrams": ["arc", "car"]
}
```

### Get a random word and letter

```
GET /api/random
```

- Response example

```json
{
  "letter": "i",
  "word": "octillionth"
}
```

### Get stats about the words

```
GET /api/stats
```

- Response example

```json
{
  "total": 370101,
  "byLetter": {
    "a": 25416,
    "b": 18413,
    "c": 32107,
    "d": 18733,
    "e": 14197,
    "f": 11893,
    "g": 10953,
    "h": 13743,
    "i": 13199,
    "j": 2842,
    "k": 3952,
    "l": 10002,
    "m": 19805,
    "n": 13458,
    "o": 12681,
    "p": 34860,
    "q": 1793,
    "r": 16783,
    "s": 38761,
    "t": 18818,
    "u": 22767,
    "v": 5329,
    "w": 6559,
    "x": 507,
    "y": 1143,
    "z": 1387
  },
  "posibleWords": {
    "a": 295791,
    "h": 92370,
    "e": 376457,
    "d": 113189,
    "i": 313009,
    "n": 251434,
    "g": 82625,
    "s": 250281,
    "l": 194914,
    "m": 105203,
    "r": 246143,
    "v": 33075,
    "k": 26814,
    "w": 22408,
    "o": 251596,
    "f": 39238,
    "c": 152979,
    "t": 230894,
    "u": 131495,
    "b": 63940,
    "y": 70578,
    "x": 10493,
    "j": 5458,
    "p": 113661,
    "z": 14757,
    "q": 5883,
    "-": 2
  },
  "mostCommonLetters": [
    "e",
    "i",
    "a",
    "o",
    "n",
    "s",
    "r",
    "t",
    "l",
    "c",
    "u",
    "p",
    "..."
  ],
  "shortest": "z",
  "longest": "dichlorodiphenyltrichloroethane"
}
```
