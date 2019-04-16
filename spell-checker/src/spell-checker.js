import wordValidator from './word-validator';

const WORD_DELIMITER = ' ';

export default (input) => {
    if (typeof input !== 'string') {
        return undefined;
    }
    const words = input.split(WORD_DELIMITER);
    return words.reduce((carry, word) => {
        const trimmedWord = word.trim();
        return trimmedWord.length === 0 || wordValidator.isValid(trimmedWord) ? carry : [...carry, trimmedWord];
    }, []);
};
