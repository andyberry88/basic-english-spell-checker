import { expect } from 'chai';

import spellChecker from './spell-checker';

describe('spell checker', () => {
    it('should export a function', () => {
        expect(spellChecker).to.be.a('function');
    });

    context('when there are no errors', () => {
        it('should validate a single word as correct', () => {
            expect(spellChecker('come')).to.deep.equal([]);
        });

        it('should validate 2 words as correct', () => {
            expect(spellChecker('come account')).to.deep.equal([]);
        });

        it('should validate many words as correct', () => {
            expect(spellChecker('come account able bent cold take')).to.deep.equal([]);
        });
    });

    context('when there are errors', () => {
        it('should validate a single word as incorrect', () => {
            expect(spellChecker('invalid')).to.deep.equal(['invalid']);
        });

        it('should validate 2 words as incorrect', () => {
            expect(spellChecker('moar invalid')).to.deep.equal(['moar', 'invalid']);
        });

        it('should validate many words as incorrect', () => {
            expect(spellChecker('moar invalid wordz simplez oh noz')).to.deep.equal([
                'moar',
                'invalid',
                'wordz',
                'simplez',
                'oh',
                'noz',
            ]);
        });
    });
});
