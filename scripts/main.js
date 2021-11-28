const works = [
  {
    title: 'expoforum',
    url: './pages/expoforum',
    deg: -90,
  },
  {
    title: 'logoipsome',
    url: './pages/logoipsome',
    deg: 180,
  },
  {
    title: 'mob-first',
    url: './pages/mob-first',
    deg: 90,
  },
  {
    title: 'paralax',
    url: './pages/paralax',
    deg: 0,
  },
];

function removeClass() {
  const items = document.getElementsByClassName('item');
  for (const el of items) {
    el.classList.remove('active');
  }
}

window.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.classList.contains('item') && !target.classList.contains('item-body')) {
    removeClass();
  }
});

function render() {
  const list = document.querySelector('.list');
  const docFragment = document.createDocumentFragment();

  let rotateItem = 45;

  works.forEach(el => {
    const item = document.createElement('li');
    item.innerHTML = `
      <div class="item-body">
        <span class="title">${el.title}</span>
      </div>
    `

    item.className = 'item';
    item.style.transform = `rotate(${rotateItem}deg)`;
    rotateItem += 90;

    item.addEventListener('click', () => {
      removeClass();
      item.classList.add('active');
      list.style.transform = `rotate(${el.deg}deg)`;
    });

    docFragment.append(item);
  });

  list.append(docFragment);
}

render();