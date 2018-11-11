import React from 'react';
import '../css/filterListDesk.scss';

class FilterListDesk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="filterListDesk">
        <form>
          <div className="filterWrapper">
            <label htmlFor="search">Search by name</label>
            <div className="inputWrapper">
              <input type="search" name="search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FilterListDesk;
