# Basic Spell Checker

## The Challenge

**Brief: Make a spell checker for BASIC English**

### Background

British American Scientific International Commercial (BASIC) English is a constructed language. It has 850 English words, carefully chosen to make the language easy to learn but still powerful enough to communicate every day ideas and actions. The rules of usage are identical to full English, so the speaker communicates in perfectly good, but simple, English.

### Objectives

The objective is to create a simple spell checker which tells you when you are using BASIC English and/or the incorrect words.

### Resources

- More about Basic English: http://ogden.basic-english.org/basiceng.html
- The list of 850 words: http://ogden.basic-english.org/words.html
- Combined word list (includes some compound words): https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist
- The page on (Simple) Wikipedia: https://simple.wikipedia.org/wiki/Basic_English

## My Approach

The approach I took was the following:

- create a `spell-checker` utility which returns incorrect words
  - this uses a Trie for fast retrieval
  - the incorrect words are currently returned as an array, this may become an array of objectives later so it can specific the line and character number of the invalid word
- create a basic React app to use the utility and report the incorrect words
  - this is the default `create-react-app` which uses the `spell-checker` utility as a yarn workspace

Possible extension points and/or improvements for later:

- instead of sending the whole text input to the utility, only send the current line
- in the utility, use steams to avoid having to read large chunks of data into memory
- in the spell checker utility, use the Trie more efficiently to fail fast when reading words from the stream
- serialise the Trie to avoid having to populate it the first time the utility is used
- add more variations (plurals etc.)
