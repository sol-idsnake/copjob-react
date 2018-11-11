import React from 'react';
import '../css/filterListMobile.scss';
import classnames from 'classnames';

class FilterListMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    const display = !isToggleOn ? 'inactive' : 'active';
    const filterModalClasses = classnames('filterModal', display);

    return (
      <div className="filterActionMobile">
        <button type="button" className="filterButton" onClick={this.handleClick}>
          <svg
            aria-hidden="true"
            data-icon="filter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="filterButtonSvg"
          >
            <path
              fill="#fff"
              d="M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z"
            />
          </svg>
          <span className="buttonTextFilter">Filter</span>
        </button>
        <div className={filterModalClasses}>
          <div className="topNav">
            <svg
              aria-hidden="true"
              data-icon="times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="svgClose"
              onClick={this.handleClick}
            >
              <path
                fill="#999999"
                d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
              />
            </svg>
            <span>Filters</span>
          </div>
          <div className="middleNav">
            <form>
              <input type="text" />
            </form>
          </div>
          <div className="bottomNav">
            <button type="button" className="filterSubmit">
              <svg
                aria-hidden="true"
                data-prefix="fal"
                data-icon="check"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="checkmark"
              >
                <path
                  fill="currentColor"
                  d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                />
              </svg>
              <span>Set Filters</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterListMobile;
