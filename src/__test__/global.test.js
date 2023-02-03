const text = "Hello world";
const fruits = ['pear', 'apple', 'orange', 'tangerine', 'banana'];
const reverseStr = (str, callback) => {
    callback(str.split("").reverse().join(""))
}
const reverseStrV2 = (str) => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

test('should contain a text', () => {
    expect(text).toMatch(/world/);
});

test('should contain banana', () => {
    expect(fruits).toContain('banana');
});

test('should n > m', () => {
    expect(10).toBeGreaterThan(9);
});

test('should be true', () => {
    expect(true).toBeTruthy();
});

test('should be string reversed', () => {
    reverseStr('Hello', (str) => {
        expect(str).toBe('olleH');
    });
});

test('should be string reversed (promise)', () => {
    return reverseStrV2('Hi')
        .then(string => {
            expect(string).toBe('iH')
        })
});

test('should be string reversed (async)', async () => {
    const str = await reverseStrV2('henlo');
    expect(str).toBe('olneh');
})


//
// afterEach(() => console.log("After each test"));
// afterAll(() => console.log("All the test ended."));

// beforeEach(() => console.log("Before each test"));
// beforeAll(() => console.log("Beginning of all the tests"));