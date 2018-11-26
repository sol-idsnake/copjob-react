import React from 'react';
import DepartmentItem from './department-item';
import API_BASE_URL from '../config';
import { ReactComponent as Loader } from '../img/loader.svg';
import FilterComponentMobile from './filterComponentMobile';
import FilterComponentDesktop from './filterComponentDesktop';
import '../css/listings.scss';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      filteredDepartments: [],
      error: null,
      loading: false,
      currentPage: 1,
      deptartmentsPerPage: 5,
    };
  }

  componentDidMount() {
    this.fetchDepts();
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  handleFilter = (event) => {
    const { departments } = this.state;
    const target = event.target;
    let updateDepartments = departments;
    updateDepartments = updateDepartments.filter((user) => {
      let type;
      if (target.name === 'name') {
        type = user.name;
      } else if (target.name === 'email') {
        type = user.email;
      }
      return type.toLowerCase().search(target.value.toLowerCase()) !== -1;
    });
    this.setState({ filteredDepartments: updateDepartments });
  };

  fetchDepts() {
    this.setState({
      error: null,
      loading: true,
    });
    return fetch(`${API_BASE_URL}/dept/get/`, {
      method: 'GET',
      credentials: 'include',
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
          filteredDepartments: departments,
          loading: false,
        });
      })
      .catch(err => this.setState({
        error: 'Could not load departments, please try again later',
        loading: false,
      }));
  }

  render() {
    const {
      departments,
      deptartmentsPerPage,
      error,
      loading,
      currentPage,
      filteredDepartments,
    } = this.state;

    const indexOfLastTodo = currentPage * deptartmentsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - deptartmentsPerPage;
    const currentDepartments = filteredDepartments.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(departments.length / deptartmentsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
      <li key={number} id={number} onClick={this.handleClick} onKeyDown={this.handleClick}>
        {number}
      </li>
    ));

    const departmentList = currentDepartments.map((department, index) => (
      <DepartmentItem department={department} index={index} key={department.name} />
    ));

    const filterComp = window.innerWidth >= 1024 ? (
      <FilterComponentDesktop onChange={this.handleFilter} />
    ) : (
      <FilterComponentMobile />
    );

    const emptyList = (
      <div className="content">
        <span>Your criteria doesn&apos;t match any departments.</span>
      </div>
    );
    // const filterListcomponent = departmentList.length !== 0 ? filterComp : null;
    const loadAnim = loading ? <Loader className="loader" /> : null;
    const filledDeptList = departmentList.length === 0 ? (
      emptyList
    ) : (
      <div className="content">
        <ul className="departments">{departmentList}</ul>
        <ul className="pagination">{renderPageNumbers}</ul>
      </div>
    );

    const errorSpan = error ? <span className="error">{error}</span> : null;

    return (
      <section className="jobsboard">
        {filterComp}
        {loadAnim}
        {filledDeptList}
        {errorSpan}
      </section>
    );
  }
}
