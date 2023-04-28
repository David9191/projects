import { getUserData } from './getData.js';
import { getResponsePage } from './responsePage.js';
import { changeUserInfo } from './changeUserInfo.js';

// // const checkPassword = async (password) => {
// //   const token = sessionStorage.getItem('techmate_token');
// //   const { userId } = await getUserId(token);
// //   const response = await fetch(`http://localhost:3000/users/password-check`, {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: {
// //       userId: userId,
// //       password: password,
// //     },
// //   });
// //   const data = await response.json();
// //   return data;
// // };

// // async function checkBeforResponse() {
// //   const passwordCheckBtn = document.querySelector('.check-password-btn');
// //   const passwordCheckInput = document.querySelector('.input-password-check');

// //   passwordCheckBtn.addEventListener('click', () => {
// //     const password = passwordCheckInput.value;
// //     const check = checkPassword(password);
// //     console.log(check);
// //     // getResponsePage();
// //   });
// // }

// // checkBeforResponse();

// const checkPassword = (password) => {
//   const user = getUserData();
//   // const user = await getUserData();
//   // console.log(user);
//   // const passwordCheckBtn = document.querySelector('.check-password-btn');
//   // const passwordCheckInput = document.querySelector('.input-password-check');
//   // passwordCheckBtn.addEventListener('click', () => {
//   //   const inputPassword = passwordCheckInput.value;
//   //   if (inputPassword === password) {
//   //     getResponsePage(user);
//       // .then(() => {
//       //   changeUserInfo();
//       // });
//   //   }
//   // });
// };
// checkPassword('11111111');
// export { checkPassword };
