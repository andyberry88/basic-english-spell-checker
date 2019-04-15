import TrieSearch from 'trie-search';
import { flatten } from 'lodash';

import validWords from '../config/words';

const arrayOfValidWords = flatten(Object.values(validWords))
    .map((word) => ({ word }));
const trie = new TrieSearch('word');
trie.addAll(arrayOfValidWords);

const WORD_DELIMITER = ' ';

export default (input) => {
    if (typeof input !== 'string') {
        return undefined;
    }
    const words = input.split(WORD_DELIMITER);
    return words.reduce((carry, word) => {
        const isValidWord = trie.get(word).length === 1;
        return isValidWord ? carry : [...carry, word];
    }, []);
};
