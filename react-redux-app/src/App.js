import React from 'react';
import { connect } from 'react-redux';
import { action2,action1 } from './redux';

// App.js
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.reducer1.title || 'Hello World!'}</h1>

        {this.props.reducer1.title ? (
          <button onClick={this.props.action1}>Exit Title</button>
        ) : (
          <button
            onClick={() =>
              this.props.action2({ title: 'Welcome to the World of Redux!' })
            }
          >
            Change Title
          </button>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  reducer1:state.reducer1,
});

const mapDispatchToProps = {
  action1,
  action2,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;