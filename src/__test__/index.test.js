const randomCity = require('../index')

describe('test functionalities for randomCity', () => {
    test('should test function', () => {
        expect(typeof (randomCity())).toBe('string');
    });

    test('should not be in array', () => {
        expect(randomCity()).not.toMatch(/Cordoba/);
    });
});