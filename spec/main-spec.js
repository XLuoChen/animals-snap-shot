const animals = require('../src/main');

describe('animals snapshots', ()=> {
  describe('buildTimeSnapShots', ()=> {

    it("build timeSnapshots", ()=> {
      const snapShots = [`351055db-33e6-4f9b-bfe1-16f1ac446ac1
2016/09/02 22:30:52
cat1 10 9 2 -1
cat2 2 3`];
      const result=animals.buildTimeSnapShots(snapShots);
      const expectResult = [{
        timeId: '351055db-33e6-4f9b-bfe1-16f1ac446ac1',
        date: '2016/09/02 22:30:52',
        animals: ['cat1 10 9 2 -1', 'cat2 2 3']
      }];
      expect(result).toEqual(expectResult);
    });
  });
});