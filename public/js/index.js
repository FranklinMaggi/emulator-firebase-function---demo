// public/js/index.js
import { initGenerateUser } from './generateUser.js';
import { initAuthenticateUser } from './generateAuthenticationUser.js';

document.addEventListener('DOMContentLoaded', () => {
  initGenerateUser();
  initAuthenticateUser();
});