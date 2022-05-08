
const Engineer = require('../lib/Engineer')

test('Engineer Object', () => {
    const engineer = new Engineer('Brittani Court', 2, 'test@getMaxListeners.com', 'Serendipbrity');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
});