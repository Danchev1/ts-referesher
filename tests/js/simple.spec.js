import { simpleFunc } from '../../src/js/simple';

describe('simple', () => {
    test('Should call function', () => {
        expect(simpleFunc()).toBe('init simple func');
    });
});
