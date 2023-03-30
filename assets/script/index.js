'use strict';

const buttonAccept = document.querySelector('.button-accept');
const buttonSettings = document.querySelector('.button-settings');
const cookies = document.querySelector('.cookies');
const cookiesBox = document.querySelector('.cookies-box');
const cookiesSettings = document.querySelector('.cookies-settings');

if (document.cookie === '') {
  cookies.style.display = 'block';
} else {
  cookies.style.display = 'none';
};

buttonAccept.addEventListener('click', () => {
  cookies.style.display = 'none';
});

buttonSettings.addEventListener('click', () => {
  cookiesBox.style.display = 'none';
  cookiesSettings.style.display = 'grid';
});

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

console.log(document.cookie ? 'Cookies available' : 'No cookies found');
console.log(document.cookie);