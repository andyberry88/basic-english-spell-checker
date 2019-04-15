/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import fs from 'fs';
import path from 'path';

import spellChecker from './spell-checker';

describe('spell checker', () => {
    it('should export a function', () => {
        expect(spellChecker).to.be.a('function');
    });

    it('doesnt error if an empty string is provided', () => {
        expect(spellChecker('')).to.not.throw;
    });

    it('doesnt error if an empty value is provided', () => {
        expect(spellChecker(undefined)).to.not.throw;
        expect(spellChecker(null)).to.not.throw;
    });

    it('doesnt error if a non string value is provided', () => {
        expect(spellChecker(undefined)).to.not.throw;
        expect(spellChecker(null)).to.not.throw;
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

        it('should only return the incorrect words', () => {
            expect(spellChecker('moar frequent invalid wordz great simplez oh noz')).to.deep.equal([
                'moar',
                'invalid',
                'wordz',
                'simplez',
                'oh',
                'noz',
            ]);
        });
    });

    it('can perform a spell check on a large amount of text', () => {
        const text = fs.readFileSync(path.resolve(__dirname, '../lorem-ipsum.txt'), 'UTF-8');
        expect(spellChecker(text)).to.not.be.empty;
    });
});
