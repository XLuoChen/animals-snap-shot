const hello = require('../src/main');

describe('test', ()=> {
  it('return hello world', ()=> {
    const test = hello();
    expect(test).toEqual('hello world');
  });
});