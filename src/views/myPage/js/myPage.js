import { header } from '../../headerComponent/header.js';
import { getUserId } from '../../orderPage/js/getUserId.js';
// import { checkPassword } from './checkPassword.js';

async function render() {
  header();
  const token = sessionStorage.getItem('techmate_token');
  const response = await fetch('http://localhost:3000/users/token-decode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: {
      token,
    },
  });
  const data = await response.json();

  console.log(data);
  // getResponsePage();
  // checkPassword();
}

render();
