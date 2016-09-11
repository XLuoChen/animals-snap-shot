const animals = require('../src/main');

describe('judge coordinates', ()=> {
  let animalsSnapshots;

  it('return null when last coordinates is correct', ()=> {
    animalsSnapshots = [{
      timeId: 'e4e87cb2-8e9a-4749-abb6-26c59344dfee',
      date: '2016/09/02 22:30:46',
      animals: [{
        animalId: 'cat1',
        lastx: 10,
        lasty: 9,
        changedx: 0,
        changedy: 0
      }]
    },
      {
        timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
        date: '2016/09/02 22:30:52',
        animals: [{
          animalId: 'cat1',
          lastx: 10,
          lasty: 9,
          changedx: 2,
          changedy: -1
        },
          {
            animalId: 'cat2',
            lastx: 2,
            lasty: 3,
            changedx: 0,
            changedy: 0
          }
        ]
      }
    ];

    const wrongCoordinate = animals.findWrongSnapshot(animalsSnapshots);
    expect(wrongCoordinate).toBe(null);
  });

  it('return first wrong data when last coordinates is not correct', ()=> {
    animalsSnapshots = [{
      timeId: 'e4e87cb2-8e9a-4749-abb6-26c59344dfee',
      date: '2016/09/02 22:30:46',
      animals: [{
        animalId: 'cat1',
        lastx: 10,
        lasty: 9,
        changedx: 1,
        changedy: 2
      }]
    },
      {
        timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
        date: '2016/09/02 22:30:52',
        animals: [{
          animalId: 'cat1',
          lastx: 10,
          lasty: 11,
          changedx: 2,
          changedy: -1
        },
          {
            animalId: 'cat2',
            lastx: 2,
            lasty: 3,
            changedx: 0,
            changedy: 0
          }
        ]
      },
      {
        timeId: '3k8789-33e6-4f9b-bfe1-16f1ac446ac1',
        date: '2016/09/02 22:30:52',
        animals: [
          {
            animalId: 'cat2',
            lastx: 2,
            lasty: 4,
            changedx: 1,
            changedy: 0
          }
        ]
      }
    ];

    const wrongCoordinate = animals.findWrongSnapshot(animalsSnapshots);
    expect(wrongCoordinate).not.toBe(null);
  });
});