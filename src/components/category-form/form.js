import React from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const emptyState = {
  title: '',
  amount: 0,
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || emptyState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form
      onSubmit={ this.handleSubmit }
      className="category-form"
      >
      <input
      type="text"
      name="title"
      placeholder="Category"
      value={ this.state.title }
      onChange={ this.handleChange }
      />
      <input
      type="number"
      name="amount"
      placeholder="Amount Budgeted"
      value={ this.state.amount }
      onChange={ this.handleChange }
      />
      <button type="submit">{ buttonText }</button>
      </form>
    );
  }
}

Form.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
