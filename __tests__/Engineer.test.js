const Engineer = require("../lib/engineer");

test('Tests engineer functions', () => {
    const newEngineer = new Engineer('Test', 2, 'testengineer@test.com', 'github.com');

    expect(newEngineer.getGithub()).toEqual('github.com');
    expect(newEngineer.getRole()).toEqual('Engineer');
})