export function getListHtml(arr) {
  let lista = '';
  for (let i = 0; i < arr.length; i++) {
    lista = lista + getListEl(arr[i]);
  }
  return `<ul>${arr.reduce((acc, el) => acc + getListEl(el), '')}</ul>`;
}

function getListEl(str) {
  return `<li>${str}</li>`;
}
