import leftPad from './leftpad';
import dayOne from './dayOne';
const serNos = [6934, 23111, 23114, 1001, 211161, 1246, 999];
const partEl = document.getElementById('part-list');
const strList = serNos.reduce(
  (acc, element) => acc += `<li>${leftPad(element, 8, '0')}</li>`, ''
);

partEl.innerHTML = strList
dayOne();