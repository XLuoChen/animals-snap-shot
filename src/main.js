const printAnimalsSnapShots = (historyData)=> {
  const snapShots = historyData.split('\n\n');
};

const buildTimeSnapShots = (snapShots)=> {
  return snapShots.map(snapShot => {
    const shots = snapShot.split('\n');
    const timeId = shots[0];
    const date = shots[1];
    const animals = [];
    for (let i = 2; i < shots.length; i++) {
      animals.push(shots[i]);
    }

    return {timeId, date, animals};
  });
};

module.exports = {
  printAnimalsSnapShots,
  buildTimeSnapShots
};