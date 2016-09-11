const printAnimalsSnapshots = (historyData)=> {
  const snapshots = historyData.split('\n\n');
  const timeSnapshots = buildTimeSnapshots(snapshots);
  if (!isValidFormat(timeSnapshots)) {
    console.log('Invalid format');
  } else {
    const animalsSnapshots = buildAnimalsSnapshots(timeSnapshots);
    const wrongSnapshot = findWrongSnapshot(animalsSnapshots);
    if (wrongSnapshot) {
      console.log(`Conflict found at ${wrongSnapshot.timeId}`);
    } else {

    }
  }
};

const buildTimeSnapshots = (snapshots)=> {
  return snapshots.map(snapshot => {
    const shots = snapshot.split('\n');
    const timeId = shots[0];
    const date = shots[1];
    const animals = [];
    for (let i = 2; i < shots.length; i++) {
      animals.push(shots[i]);
    }

    return {timeId, date, animals};
  });
};

const isValidFormat = (timeSnapshots)=> {
  let isValidTimeId;
  let isValidDate;
  let isValidCoordinate;
  timeSnapshots.forEach(timeSnapshot => {
    isValidTimeId = timeSnapshot.timeId.split('').every(s => s !== ' ');
    isValidDate = (/\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}:\d{2}$/).test(timeSnapshot.date);
    isValidCoordinate = timeSnapshot.animals.every(animal => hasCorrectCoordinate(animal));
  });

  return (isValidTimeId && isValidDate && isValidCoordinate);
};

const hasCorrectCoordinate = (animal) => {
  const positionInfo = animal.split(' ');

  return positionInfo.length === 3 || positionInfo.length === 5;
};

const buildAnimalsSnapshots = (timeSnapshots)=> {
  return timeSnapshots.map(timeSnapshot => {
    const animals = timeSnapshot.animals.map(animal => {
      const animalCoordinates = animal.split(' ');
      const animalId = animalCoordinates[0];
      const lastx = formatData(animalCoordinates[1]);
      const lasty = formatData(animalCoordinates[2]);

      const isChanged = animalCoordinates.length === 5;
      const changedx = isChanged ? formatData(animalCoordinates[3]) : 0;
      const changedy = isChanged ? formatData(animalCoordinates[4]) : 0;

      return {animalId, lastx, lasty, changedx, changedy};
    });

    return {timeId: timeSnapshot.timeId, date: timeSnapshot.date, animals};
  });
};

const formatData = (data) => {
  return parseInt(data);
};

const findWrongSnapshot = (animalsSnapshots) => {
  for (let i = 1; i < animalsSnapshots.length; i++) {
    for (let j = 0; j < animalsSnapshots[i].animals.length; j++) {
      const animal = animalsSnapshots[i].animals[j];
      if (animal.changedx && animal.changedy) {
        const lastSnapshots = animalsSnapshots[i - 1].animals.find(ele => ele.animalId === animal.animalId);
        const x = lastSnapshots.lastx + lastSnapshots.changedx;
        const y = lastSnapshots.lasty + lastSnapshots.changedy;

        if (animal.lastx !== x || animal.lasty !== y) {
          return animalsSnapshots[i];
        }
      }
    }
  }
  return null;
};

const buildAllAnimalsSnapshots = (animalsSnapshots) => {
  const allAnimalsSnapshots = [];
  for (let i = 0; i < animalsSnapshots.length; i++) {
    const allAnimals = animalsSnapshots[i].animals.map(animal => {
      const currentx = animal.lastx + animal.changedx;
      const currenty = animal.lasty + animal.changedy;

      return {animalId: animal.animalId, currentx, currenty};
    });
    allAnimalsSnapshots.push({animalsSnapshot: animalsSnapshots[i], allAnimals});
    if (i > 0) {
      const currentAnimals = allAnimalsSnapshots[i].allAnimals;
      const notMovedAnimals = allAnimalsSnapshots[i - 1].allAnimals.filter(
        item => !currentAnimals.some(a => a.animalId === item.animalId));
      allAnimalsSnapshots[i].allAnimals = currentAnimals.concat(notMovedAnimals);
    }
  }
  return allAnimalsSnapshots;
};

module.exports = {
  printAnimalsSnapshots,
  buildTimeSnapshots,
  isValidFormat,
  buildAnimalsSnapshots,
  findWrongSnapshot,
  buildAllAnimalsSnapshots
};