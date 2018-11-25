import React from 'react';
import classNames from 'classnames';
import LoginComponent from './loginComponent';
// import RegisterComponent from './registerComponent';
import asyncComponent from './async/asyncComponent';
import '../css/joinModule.scss';

const AsyncRegisterComponent = asyncComponent(() => import('./registerComponent'));

class JoinModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'login',
    };
  }

  handleActiveTab = name => (event) => {
    this.setState({ activeTab: name });
  };

  render() {
    const { activeTab } = this.state;
    const joinComponent = activeTab === 'login' ? <LoginComponent /> : <AsyncRegisterComponent />;

    return (
      <div className="wrapper">
        <div
          onClick={this.handleActiveTab('login')}
          onKeyDown={this.handleActiveTab('login')}
          className={classNames('login', {
            active: activeTab === 'login',
          })}
          role="Switch"
          tabIndex={0}
        >
          Login
        </div>
        <div
          onClick={this.handleActiveTab('register')}
          onKeyDown={this.handleActiveTab('register')}
          className={classNames('register', {
            active: activeTab === 'register',
          })}
          role="Switch"
          tabIndex={0}
        >
          Register
        </div>
        {joinComponent}
      </div>
    );
  }
}

export default JoinModule;
