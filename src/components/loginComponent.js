import React from 'react';
import '../css/joinWrapper.scss';

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="join_wrapper">
        <form>
          <div className="field-input-wrapper">
            <label htmlFor="name" />
            <input type="text" id="name" placeholder="Name" className="join_Component" />
          </div>
          <div className="field-input-wrapper">
            <label htmlFor="password" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="join_Component"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
