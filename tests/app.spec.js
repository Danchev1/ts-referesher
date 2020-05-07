import { greetings } from '../src/app';

describe('greetings()', () => {
    test('Should call function', () => {
        expect(greetings('string')).toBe('init simple func');
    });
});
