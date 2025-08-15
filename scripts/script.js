// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


// Part 1 -------------------------------------------

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');


// Part 2 -------------------------------------------

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

// Part 3 -------------------------------------------

for (const link of menuLinks) {
  const menuButton = document.createElement("a");
  menuButton.href = link.href;
  menuButton.textContent = link.text;
  topMenuEl.appendChild(menuButton);
}

// Section 2 Part 3

const subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';


// Section 2 Part 4

const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function handleGreet(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') return;

  const clicked = event.target;
  const wasActive = clicked.classList.contains('active');

  topMenuLinks.forEach(link => link.classList.remove('active'));
  if (!wasActive) clicked.classList.add('active');


  // Section 2 Part 5

  const linkText = clicked.textContent.toLowerCase();
  const linkData = menuLinks.find(l => l.text === linkText);

  if (!wasActive) {
    if (linkData && linkData.subLinks) {
      buildSubmenu(linkData.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
      subMenuEl.innerHTML = '';
    }
  } else {
    subMenuEl.style.top = '0';
    subMenuEl.innerHTML = '';
  }
}
);

function buildSubmenu(subLinks) {

  subMenuEl.innerHTML = '';

  for (const link of subLinks) {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  }
}

















