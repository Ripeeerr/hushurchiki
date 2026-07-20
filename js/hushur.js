'use strict';
const hushur = ['х', 'у', 'ш', 'у', 'р'];
let index = 0;
document.addEventListener('keydown', e => {
  if (e.key === hushur[index]) {
    index++;
    if (index === hushur.length) {
      activateDungeonMode();
      index = 0;
    }
  } else {
    index = 0;
  }
});
function activateDungeonMode() {
  //   document.body.classList.add('dungeon-mode');
  const popup = document.createElement('div');
  const header = document.querySelector('header');
  popup.className = 'achievement';
  popup.innerHTML = `
  <h2>Достижение разблокировано</h2>
  <p>Настоящий хушур!</p>
  `;
  if (!document.querySelector('.achievement')) {
    header.insertBefore(popup, document.querySelector('.divider'));
  }
  [...document.body.children].forEach(elem => {
    elem.classList.add('dungeon-mode');
  });
  setTimeout(() => {
    popup.remove();
    document.body.classList.remove('dungeon-mode');
  }, 4000);
}
//# sourceMappingURL=index.js.map
