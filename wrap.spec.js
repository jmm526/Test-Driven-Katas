const{ expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('returns empty string if empty string was provided', () => {
        expect(wrap('', 10)).to.equal('');
    });

    it ('returns string with no linebreaks if strlen < maxlen', () => {
        expect(wrap('hello', 10)).to.equal('hello');
    });

    it ('returns string with two linebreaks', () => {
        expect(wrap('hello my name is Bob', 10)).to.equal('hello my\nname is\nBob');
    });

    it ('handles a string with a lot of spaces', () => {
        expect(wrap('hello       my    name     is       Bob', 10)).to.equal('hello my\nname is\nBob');
    });

    it ('handles a word that is longer than the maxlen', () => {
        expect(wrap('lkjsdlfkjsdlfkjsdlkfjsdlkjfdslk hi', 10)).to.equal('lkjsdlfkjsdlfkjsdlkfjsdlkjfdslk\nhi');
    });

});
