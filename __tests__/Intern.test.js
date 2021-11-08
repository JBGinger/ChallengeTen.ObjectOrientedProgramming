const Intern = require("../lib/intern");

test('Tests intern functions', () => {
    const newIntern = new Intern('Test', 3, 'testintern@test.com', 'TCNJ');

    expect(newIntern.getSchool()).toEqual('TCNJ');
    expect(newIntern.getRole()).toEqual('Intern');
})