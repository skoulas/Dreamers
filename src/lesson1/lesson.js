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
})();
