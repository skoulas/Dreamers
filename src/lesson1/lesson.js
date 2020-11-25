(function(){
  const bobsFollowers = ["George", "Fotis", "Alexandra", "Giannis"];
  const tinasFollowers = ["Fotis", "Anna", "Alexandra"];
  const mutualFollowers = [];

  for (let i = 0; i < bobsFollowers.length; i++) {
    const bobFollower = bobsFollowers[i];

    for (let k = 0; k < tinasFollowers.length; k++) {
      const tinaFollower = tinasFollowers[k];

      if (bobFollower === tinaFollower) {
        mutualFollowers.push(tinaFollower);
      }
    }
  }

  console.log(mutualFollowers);

  // Exercise 2

  let fotisAge = 33;

  if (fotisAge == 33) {
    console.log('Fotis is 33');
  }

  fotisAge = '33';

  if (fotisAge == 33 ) {
    console.log('Fotis is still 33');
  }

  if (fotisAge === 33) {
    console.log('OMG Fotis is not 33');
  }


})();
