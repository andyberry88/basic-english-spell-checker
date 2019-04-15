import { expect } from 'chai';

import spellChecker from './spell-checker';

describe('spell checker', () => {
    it('should export a function', () => {
        expect(spellChecker).to.be.a('function');
    });
});
