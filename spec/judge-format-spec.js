const animals = require('../src/main');

describe('judge data format', ()=> {
  let timeSnapshots;
  it('return true when input valid format data', ()=> {
    timeSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: ['cat1 10 9 2 -1', 'cat2 2 3']
    }];

    const isValidFormat = animals.isValidFormat(timeSnapshots);
    expect(isValidFormat).toEqual(true);
  });
  it('return false when input invalid timeId', ()=> {
    timeSnapshots = [{
      timeId: '351055db- 33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: ['cat1 10 9 2 -1', 'cat2 2 3']
    }];

    const isValidFormat = animals.isValidFormat(timeSnapshots);
    expect(isValidFormat).toEqual(false);
  });
  it('return false when input invalid date', ()=> {
    timeSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/9/2 22:30:52',
      animals: ['cat1 10 9 2 -1', 'cat2 2 3']
    }];

    const isValidFormat = animals.isValidFormat(timeSnapshots);
    expect(isValidFormat).toEqual(false);
  });
  it('return false when input invalid date', ()=> {
    timeSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30',
      animals: ['cat1 10 9 2 -1', 'cat2 2 3']
    }];

    const isValidFormat = animals.isValidFormat(timeSnapshots);
    expect(isValidFormat).toEqual(false);
  });
  it("return false when input invalid animals's coordinate", ()=> {
    timeSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:45',
      animals: ['cat1 10 9 2']
    }];

    const isValidFormat = animals.isValidFormat(timeSnapshots);
    expect(isValidFormat).toEqual(false);
  });
});