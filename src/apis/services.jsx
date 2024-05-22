/* eslint-disable prettier/prettier */
import axios from 'axios';

const BaseUrl =
  'http://ec2-3-108-67-174.ap-south-1.compute.amazonaws.com:8000/';
const Login = 'user/signin';

const fetchDetails = async (email, password) => {
  try {
    const payload = {
      email: email,
      password: password,
    };
    const resposne = await axios.post(BaseUrl + Login, payload);
    console.log('response: ', resposne.data);
    return resposne.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export default fetchDetails;
