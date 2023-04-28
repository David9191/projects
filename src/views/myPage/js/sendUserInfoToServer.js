import { getUserId } from '../../orderPage/js/getUserId.js';

async function sendUserInfoToServer(changeInfo) {
  const token = sessionStorage.getItem('techmate_token');
  const { userId } = getUserId(token);
  const { currentPassword, password, mobileNumber, address } = changeInfo;
  const response = await fetch(`http://localhost:3000/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      currentPassword,
      password,
      mobileNumber,
      address,
    },
  });
  const data = await response.json();
  console.log('정보가 수정되었습니다');
  console.log(data);
  return data;
}

export { sendUserInfoToServer };
