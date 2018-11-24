import React from 'react';
import '../css/joinWrapper.scss';

class RegisterComponent extends React.Component {
  render() {
    return (
      <div className="join_wrapper">
        <form>
          <div className="field-input-wrapper">
            <label htmlFor="firstname" />
            <input type="text" id="firstname" placeholder="First Name" className="join_Component" />
          </div>
          <div className="field-input-wrapper">
            <label htmlFor="lastName" />
            <input type="text" id="lastName" placeholder="Last Name" className="join_Component" />
          </div>
          <div className="field-input-wrapper">
            <label htmlFor="email" />
            <input type="email" id="email" placeholder="Email" className="join_Component" />
          </div>
          <div className="field-input-wrapper">
            <select>
              <option>Try1</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterComponent;
