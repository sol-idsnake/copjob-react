import React from 'react';
import DepartmentItem from './department-item';
import API_BASE_URL from '../config';
import { ReactComponent as Loader } from '../img/loader.svg';
import FilterListMobile from './filterListMobile';
import FilterListDesk from './filterListDesk';
import '../css/listings.scss';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchDepts();
  }

  fetchDepts() {
    this.setState({
      error: null,
      loading: true,
    });
    return fetch(`${API_BASE_URL}/dept/get/`, {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then((departments) => {
        this.setState({
          departments,
          loading: false,
        });
      })
      .catch(err => this.setState({
        error: 'Could not load departments',
        loading: false,
      }));
  }

  render() {
    const { departments, error, loading } = this.state;
    const departmentList = departments.map((department, index) => (
      <DepartmentItem department={department} index={index} key={department.name} />
    ));

    const loadAnim = loading ? <Loader className="loader" /> : null;

    const filterListcomponent = window.innerWidth >= 1024 ? (
      <FilterListDesk departments={departments} />
    ) : (
      <FilterListMobile />
    );

    return (
      <section className="jobsboard">
        {loadAnim}
        {filterListcomponent}
        <ul>{departmentList}</ul>
        <span className="error">{error}</span>
      </section>
    );
  }
}
