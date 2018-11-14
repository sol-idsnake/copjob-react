import React from 'react';
import '../css/department-item.scss';

export default class DepartmentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const {
      department: {
        name,
        location,
        state,
        position,
        salary,
        age,
        citizenship,
        description,
        url: { link, tag },
      },
    } = this.props;

    const { isToggleOn } = this.state;

    const hasName = name ? <h3>{name}</h3> : <h3>Can{"'"}t retrieve name</h3>;
    const hasLocation = location && state ? (
      <span>
        {location}, {state}
      </span>
    ) : (
      <span>Full location unavailable</span>
    );
    const hasSalary = salary ? (
      <span>
        This department pays <em>{salary}</em>
      </span>
    ) : (
      <em>Salary unavailable</em>
    );
    const hasCitizenship = citizenship ? <span> and requires you to be a citizen</span> : null;
    const tagAge = age ? <span className="tags age">{age}</span> : null;
    const tagCitizenship = citizenship ? (
      <span className="tags citizenship">Requires citizenship</span>
    ) : null;
    const tagPosition = position ? <span className="tags position">{position}</span> : null;

    const expandedContent = isToggleOn ? (
      <div className="expand">
        <div className="salary">
          <span>
            {hasSalary}
            {hasCitizenship}
          </span>
        </div>
        <div>
          <p>The following description is provided by the agency:</p>
          <p>{description}</p>
        </div>
        <a target="_blank" href={`${link}`} rel="noopener noreferrer">
          {tag}
        </a>
      </div>
    ) : null;

    return (
      <li className="department-item" onClick={this.handleClick} onKeyDown={this.handleClick}>
        <div className="department_link_and_location">
          {hasName}
          {hasLocation}
        </div>
        <div className="department_tags">
          {tagPosition}
          {tagAge}
          {tagCitizenship}
        </div>
        {expandedContent}
      </li>
    );
  }
}
