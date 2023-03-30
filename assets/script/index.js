'use strict';

const buttonAccept = document.querySelector('.button-accept');
const buttonSettings = document.querySelector('.button-settings');
const cookies = document.querySelector('.cookies');
const cookiesBox = document.querySelector('.cookies-box');
const cookiesSettings = document.querySelector('.cookies-settings');

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    SameSite: 'Lax',
    ...options
  };
  
  const keys = Object.keys(options);
  const values = Object.values(options);
  
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
  for (let i = 0; i < keys.length; i++) {
    updatedCookie += `; ${keys[i]}=${values[i]}`;
  }
  
  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {'max-age': -1});
}

function getScreenHeight() {
  return screen.height;
};

function getScreenWidth() {
  return screen.width;
};

if (document.cookie === '') {
  cookies.style.display = 'block';
} else {
  cookies.style.display = 'none';
};

buttonAccept.addEventListener('click', () => {
  cookies.style.display = 'none';
  
  setCookie('screen-width', getScreenWidth(), {'max-age': 10});
  setCookie('screen-height', getScreenHeight(), {'max-age': 10});
});

buttonSettings.addEventListener('click', () => {
  cookiesBox.style.display = 'none';
  cookiesSettings.style.display = 'grid';
});

console.log(navigator.userAgent);

console.log(document.cookie ? 'Cookies available' : 'No cookies found');
console.log('');
console.log(getCookie('screen-width'));
console.log(getCookie('screen-height'));

// deleteCookie('screen-height');
// deleteCookie('screen-width');