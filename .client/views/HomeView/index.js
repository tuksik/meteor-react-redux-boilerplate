/* global Todos ReactMeteorData */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoAction from '../../actions/Todo';
import TodoApp from '../../components/TodoApp/index';
import TodoAdd from '../../components/TodoAdd/index';

const actionCreators = {
  ...TodoAction,
};

function mapStateToProps(state) {
  return {
    routerState: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export const HomeView = React.createClass({
  propTypes: {
    actions: React.PropTypes.object,
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      todos: Todos.find({}).fetch(),
    };
  },

  render () {
    console.log(this.props);
    return (
      <div className='container text-center'>
        <h1>Meteor React Redux Boilerplateaaaaa</h1>
        <TodoAdd addTodo={this.props.actions.addTodo} />
        <TodoApp
          todos={this.data.todos}
          actions={this.props.actions} />
        {JSON.stringify(this.data.todos)}
      </div>
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
