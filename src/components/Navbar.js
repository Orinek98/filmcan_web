// export default function Navbar() {
//   const nav = document.createElement('nav');
//   nav.className = 'navbar';

//   const ul = document.createElement('ul');

//   const links = [
//     { href: '/short_film', text: 'Short Film', dataContent: 'Short Film' },
//     { href: '/videoclip', text: 'Videoclip', dataContent: 'VideoClip' },
//     { href: '/live_session', text: 'Live Session', dataContent: 'Live Session' },
//     { href: '/contact', text: 'Contact', dataContent: 'Contact' }
//   ];

//   links.forEach(linkInfo => {
//     const li = document.createElement('li');
//     const div = document.createElement('div');
//     const a = document.createElement('a');

//     a.href = linkInfo.href;
//     a.textContent = linkInfo.text;
//     a.setAttribute('data-content', linkInfo.dataContent);

//     div.appendChild(a);
//     li.appendChild(div);
//     ul.appendChild(li);
//   });

//   nav.appendChild(ul);
//   return nav;
// }

export default function Header() {
  const header = document.createElement('header');
  header.textContent = 'Benvenuto!';
  return header;
}
