const printAnimalsSnapshots = (historyData)=> {
  const snapshots = historyData.split('\n\n');
  const timeSnapshots = buildTimeSnapshots(snapshots);
  if (!isValidFormat(timeSnapshots)) {
    console.log('Invalid format');
  } else {

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
  const animalsSnapshots = timeSnapshots.map(timeSnapshot => {
    const animals = timeSnapshot.animals.map(animal => {
      const animalCoordinates = animal.split(' ');
      const animalId = animalCoordinates[0];
      let lastx = formatData(animalCoordinates[1]);
      let lasty = formatData(animalCoordinates[2]);
      let changedx, changedy;

      if (animalCoordinates.length === 3) {
        changedx = 0;
        changedy = 0;
      } else {
        changedx = formatData(animalCoordinates[3]);
        changedy = formatData(animalCoordinates[4]);
      }
      return {animalId, lastx, lasty, changedx, changedy};
    });
    return {timeId: timeSnapshot.timeId, date: timeSnapshot.date, animals};
  });

  return animalsSnapshots;
};

const formatData = (data) => {
  return parseInt(data);
};

module.exports = {
  printAnimalsSnapshots,
  buildTimeSnapshots,
  isValidFormat,
  buildAnimalsSnapshots
};