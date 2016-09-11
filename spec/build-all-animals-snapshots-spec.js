const animals = require('../src/main');

describe("build all animals's snapshots", ()=> {
  let animalsSnapshots;

  it('calculate coordinates when all animals have moved', () => {
    animalsSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: [{
        animalId: 'cat1',
        lastx: 2,
        lasty: 3,
        changedx: 0,
        changedy: 0
      }]
    },
      {
        timeId: 'dcfa0c7a-5855-4ed2-bc8c-4accae8bd155',
        date: '2016/09/02 22:31:02',
        animals: [{
          animalId: 'cat1',
          lastx: 2,
          lasty: 3,
          changedx: 2,
          changedy: 1
        }]
      }
    ];

    const allAnimalsSnapshots = animals.buildAllAnimalsSnapshots(animalsSnapshots);
    const expectResult = [{
      animalsSnapshot: {
        timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
        date: '2016/09/02 22:30:52',
        animals: [{
          animalId: 'cat1',
          lastx: 2,
          lasty: 3,
          changedx: 0,
          changedy: 0
        }]
      },
      allAnimals: [
        {
          animalId: 'cat1',
          currentx: 2,
          currenty: 3
        }
      ]
    },
      {
        animalsSnapshot: {
          timeId: 'dcfa0c7a-5855-4ed2-bc8c-4accae8bd155',
          date: '2016/09/02 22:31:02',
          animals: [{
            animalId: 'cat1',
            lastx: 2,
            lasty: 3,
            changedx: 2,
            changedy: 1
          }]
        },
        allAnimals: [
          {
            animalId: 'cat1',
            currentx: 4,
            currenty: 4
          }
        ]
      }
    ];

    expect(allAnimalsSnapshots).toEqual(expectResult);
  });

  it('calculate coordinates when some animals did not moved', ()=> {
    animalsSnapshots = [{
      timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
      date: '2016/09/02 22:30:52',
      animals: [{
        animalId: 'cat1',
        lastx: 2,
        lasty: 3,
        changedx: 0,
        changedy: 0
      },
        {
          animalId: 'cat2',
          lastx: 3,
          lasty: 4,
          changedx: 0,
          changedy: 0
        }
      ]
    },
      {
        timeId: 'dcfa0c7a-5855-4ed2-bc8c-4accae8bd155',
        date: '2016/09/02 22:31:02',
        animals: [{
          animalId: 'cat1',
          lastx: 2,
          lasty: 3,
          changedx: 2,
          changedy: 1
        }]
      }
    ];

    const allAnimalsSnapshots = animals.buildAllAnimalsSnapshots(animalsSnapshots);
    const expectResult = [{
      animalsSnapshot: {
        timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
        date: '2016/09/02 22:30:52',
        animals: [{
          animalId: 'cat1',
          lastx: 2,
          lasty: 3,
          changedx: 0,
          changedy: 0
        },
          {
            animalId: 'cat2',
            lastx: 3,
            lasty: 4,
            changedx: 0,
            changedy: 0
          }
        ]
      },
      allAnimals: [
        {
          animalId: 'cat1',
          currentx: 2,
          currenty: 3
        },
        {
          animalId: 'cat2',
          currentx: 3,
          currenty: 4
        }
      ]
    },
      {
        animalsSnapshot: {
          timeId: 'dcfa0c7a-5855-4ed2-bc8c-4accae8bd155',
          date: '2016/09/02 22:31:02',
          animals: [{
            animalId: 'cat1',
            lastx: 2,
            lasty: 3,
            changedx: 2,
            changedy: 1
          }]
        },
        allAnimals: [
          {
            animalId: 'cat1',
            currentx: 4,
            currenty: 4
          },
          {
            animalId: 'cat2',
            currentx: 3,
            currenty: 4
          }
        ]
      }
    ];

    expect(allAnimalsSnapshots).toEqual(expectResult);
  });
});