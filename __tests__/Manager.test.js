const Manager = require("../lib/manager");

test('Tests manager functions', () => {
    const newManager = new Manager('Test', 4, 'testmanager@email.com', 101);

    expect(newManager.getRole()).toEqual('Manager');
})