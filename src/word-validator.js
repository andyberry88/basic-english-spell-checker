import TrieSearch from 'trie-search';
import pluralize from 'pluralize';

import validWords from '../config/words';

pluralize.addPluralRule(/o$/i, 'oes');

const trie = new TrieSearch('word');
const addWord = (word) => {
    trie.add({ word });
};
const addPlural = (word) => {
    addWord(pluralize(word));
};

// operations
validWords.operations.forEach((word) => addWord(word));

// things
validWords.things_general.forEach((word) => {
    addWord(word);
    addPlural(word);
});
validWords.things_picturable.forEach((word) => {
    addWord(word);
    addPlural(word);
});

// qualities
validWords.qualities_general.forEach((word) => addWord(word));
validWords.qualities_opposites.forEach((word) => addWord(word));


export default {
    isValid: (word) => {
        const foundWords = trie.get(word);
        return (foundWords.length === 1 && foundWords[0].word === word)
            || (foundWords.length === 2 && foundWords[0].word === word && foundWords[1].word === pluralize(word));
    },
};
