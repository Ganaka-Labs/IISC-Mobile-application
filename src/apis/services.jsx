/* eslint-disable prettier/prettier */
import axios from 'axios';



const fetchDetails = async() =>  {
  try {
    const resposne = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('response: ', resposne);
    return resposne.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export default fetchDetails;




