import { API_BASE_URL } from '../../config';

const fetchDepts = () => {
  fetch(`${API_BASE_URL}/dept/get/`, {
    method: 'GET',
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    console.log(res);
    return res.json();
  });
  // .then(departments => this.setState({
  //   departments,
  //   loading: false,
  // }))
  // .catch(err => this.setState({
  //   error: 'Could not load departments',
  //   loading: false,
  // }));
};

export default fetchDepts;
