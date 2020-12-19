// Thelo na kalo kati kai na perno tuxaia
// ena onoma apo tous mathites

// function tis opoias tha dino ta akra
// kai tha mou gurisei tuxaio arithmo

function getRandomIntegerNumber(leftBorder, rightBorder) {
  const resultDecimal =
    Math.random() * (rightBorder - leftBorder + 1) + leftBorder;

  const resultInteger = Math.floor(resultDecimal);

  return resultInteger;
}

export function getRandomName(names) {
  const randomNumber = getRandomIntegerNumber(0, names.length - 1);

  return names[randomNumber];
}
