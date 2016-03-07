import { expect } from 'chai';

describe('Array.filter', function () {
    it('Array.filter filter by given predicate', function () {
        var list = [1, 2, 3, 4, 5];
        var filtered = list.filter(function(n) {
            return n % 3 === 0;
        });
        expect(filtered.length).to.equal(1);
    });
});