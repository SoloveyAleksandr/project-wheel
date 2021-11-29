window.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.classList.contains('item') &&
    !target.classList.contains('item-body') &&
    !target.classList.contains('info-btn')) {
    removeClass();
    renderInfo();
  }
});

function removeClass() {
  const items = document.getElementsByClassName('item');
  for (const el of items) {
    el.classList.remove('active');
  }
}

function renderInfo(obj = null) {
  const info = document.querySelector('.info');
  const manual = document.querySelector('.manual');
  info.classList.remove('active');
  if (obj) {
    // setTimeout(() => {
    const infoTitle = document.querySelector('.info-title');
    const infoDescription = document.querySelector('.info-description');
    const infoBtn = document.querySelector('.info-btn');

    infoTitle.textContent = obj.title;
    infoDescription.textContent = obj.description;
    infoBtn.href = obj.url;

    manual.classList.add('notActive');
    info.classList.add('active');
    // }, 300);
    return;
  }
  manual.classList.remove('notActive');
}

async function render() {
  const request = await fetch('./API/works.json');
  const works = await request.json();

  const list = document.querySelector('.list');
  const docFragment = document.createDocumentFragment();

  let rotateItem = 45;

  works.forEach(el => {
    const item = document.createElement('li');
    item.innerHTML = `
      <div class="item-body">
        <span class="item-title">${el.title}</span>
      </div>
    `

    item.className = 'item';
    item.style.transform = `rotate(${rotateItem}deg)`;
    rotateItem += 90;

    item.addEventListener('click', () => {
      removeClass();
      renderInfo(el);
      item.classList.add('active');
      list.style.transform = `rotate(${el.deg}deg)`;
    });

    docFragment.append(item);
  });

  list.append(docFragment);
}

render();