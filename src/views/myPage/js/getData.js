import { getUserId, getUserInfo } from '../../orderPage/js/getUserId.js';

async function getUserData() {
  const jwtToken = sessionStorage.getItem('techmate_token');
  console.log(jwtToken);
  const { userId } = await getUserId(jwtToken);
  // const data = await getUserInfo(userId, token);
  // return data;
}

async function getMyPassword() {
  const data = await getUserData();
  return data.password;
}

export { getUserData, getMyPassword };
