const animals = require('../src/main');

describe('buildAnimalsSnapshots', ()=> {
  let timeSnapshots;
  it('set changed coordinates when there has changed coordinates in snapshots', ()=> {
    timeSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: ['cat1 10 9 2 -1']
    }];

    const animalsSnapshots = animals.buildAnimalsSnapshots(timeSnapshots);
    const expectResult = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: [{
        animalId: 'cat1',
        lastx: 10,
        lasty: 9,
        changedx: 2,
        changedy: -1
      }]
    }];
    expect(animalsSnapshots).toEqual(expectResult);
  });

  it('set changed coordinates to 0 when there does not has changed coordinates in snapshots', ()=> {
    timeSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: ['cat1 2 3']
    }];

    const animalsSnapshots = animals.buildAnimalsSnapshots(timeSnapshots);
    const expectResult = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: [{
        animalId: 'cat1',
        lastx: 2,
        lasty: 3,
        changedx: 0,
        changedy: 0
      }]
    }];
    expect(animalsSnapshots).toEqual(expectResult);
  });
});