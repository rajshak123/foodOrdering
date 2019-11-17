import axios from 'axios';
export function getAllItems() {
    return axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
}