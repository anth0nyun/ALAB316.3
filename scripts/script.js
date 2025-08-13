// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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












