'use strict';

const buttonAccept = document.querySelector('.button-accept');
const buttonSavePreferences = document.querySelector('.button-save-preferences');
const buttonSettings = document.querySelector('.button-settings');
const checkboxBrowser = document.querySelector('#checkboxBrowser');
const checkboxOs = document.querySelector('#checkboxOs');
const checkboxScreenWidth = document.querySelector('#checkboxScreenWidth');
const checkboxScreenHeight = document.querySelector('#checkboxScreenHeight');
const cookies = document.querySelector('.cookies');
const cookiesBox = document.querySelector('.cookies-box');
const cookiesSettings = document.querySelector('.cookies-settings');

checkboxBrowser.checked = true;
checkboxOs.checked = true;
checkboxScreenWidth.checked = true;
checkboxScreenHeight.checked = true;

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

function getBrowser() {
  if (navigator.userAgent.indexOf('Edg') != -1) {
    return 'Edge';
  } if (navigator.userAgent.indexOf('Chrome') != -1) {
    return 'Chrome';
  } if (navigator.userAgent.indexOf('Firefox') != -1) {
    return 'Firefox';
  } if (navigator.userAgent.indexOf('Safari') != -1) {
    return 'Safari';
  }
}

function getOS() {
  if (navigator.userAgent.indexOf('Windows NT 10.0') != -1) {
    return 'Windows 10';
  } if (navigator.userAgent.indexOf('Windows NT 6.3') != -1) {
    return 'Windows 8.1';
  } if (navigator.userAgent.indexOf('Windows NT 6.2') != -1) {
    return 'Windows 8';
  } if (navigator.userAgent.indexOf('Windows NT 6.1') != -1) {
    return 'Windows 7';
  } if (navigator.userAgent.indexOf('Linux') != -1) {
    return 'Linux';
  } if (navigator.userAgent.indexOf('Mac') != -1) {
    return 'Mac/iOS';
  } else {
    return 'Unknown';
  }
};

function getScreenWidth() {
  return screen.width;
};

function getScreenHeight() {
  return screen.height;
};

if (document.cookie === '') {
  cookies.style.display = 'block';
} else {
  cookies.style.display = 'none';
};

buttonAccept.addEventListener('click', () => {
  setCookie('browser', getBrowser(), {'max-age': 10});
  setCookie('os', getOS(), {'max-age': 10});
  setCookie('screen-width', getScreenWidth(), {'max-age': 10});
  setCookie('screen-height', getScreenHeight(), {'max-age': 10});
  
  console.log(getCookie('browser'));
  console.log(getCookie('os'));
  console.log(getCookie('screen-width'));
  console.log(getCookie('screen-height'));
  
  cookies.style.display = 'none';
});

buttonSettings.addEventListener('click', () => {
  cookiesBox.style.display = 'none';
  cookiesSettings.style.display = 'grid';
});

buttonSavePreferences.addEventListener('click', () => {
  if (checkboxBrowser.checked === true) {
    setCookie('browser', getBrowser(), {'max-age': 10});
    console.log(getCookie('browser'));
  } if (checkboxOs.checked === true) {
    setCookie('os', getOS(), {'max-age': 10});
    console.log(getCookie('os'));
  } if (checkboxScreenWidth.checked === true) {
    setCookie('screen-width', getScreenWidth(), {'max-age': 10});
    console.log(getCookie('screen-width'));
  } if (checkboxScreenHeight.checked === true) {
    setCookie('screen-height', getScreenHeight(), {'max-age': 10});
    console.log(getCookie('screen-height'));
  }
  
  cookies.style.display = 'none';
});

// console.log(getCookie('browser'));
// console.log(getCookie('os'));
// console.log(getCookie('screen-width'));
// console.log(getCookie('screen-height'));

// deleteCookie('browser');
// deleteCookie('os');
// deleteCookie('screen-height');
// deleteCookie('screen-width');