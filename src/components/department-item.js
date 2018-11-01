import React from 'react';
import Divider from '@material-ui/core/Divider';
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

    const needCitizenship = citizenship ? (
      <span className="tags citizenship">Requires citizenship</span>
    ) : null;

    const { isToggleOn } = this.state;

    const expandedContent = isToggleOn ? (
      <div className="expand">
        <div className="salary">
          <span>
            This department pays
            <em>
              {' '}
              {salary}
            </em>
            {citizenship ? ' and requires you to be a citizen' : null}
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
          <h3>{name}</h3>
          <span>
            {location}
            {', '}
            {state}
          </span>
        </div>
        <div className="department_tags">
          <span className="tags position">{position}</span>
          <span className="tags age">{age}</span>
          {needCitizenship}
        </div>
        {expandedContent}
        <Divider />
      </li>
    );
  }
}
