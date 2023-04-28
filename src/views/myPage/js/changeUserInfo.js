import { sendUserInfoToServer } from './sendUserInfoToServer.js';

function changeUserInfo() {
  const changeInfoBtn = document.querySelector('.change-user-info');
  const phoneNumberInput = document.querySelector('.input-phonenumber');
  const addressInput = document.querySelector('.input-address');
  const passwordInput = document.querySelector('.input-password');
  const passwordConfirmInput = document.querySelector('.input-passwordConfirm');
  changeInfoBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const changeInfo = {
      currentPassword: passwordConfirmInput.value,
      password: passwordInput.value,
      mobileNumber: phoneNumberInput.value,
      address: addressInput.value,
    };
    await sendUserInfoToServer(changeInfo);
  });
}

export { changeUserInfo };
