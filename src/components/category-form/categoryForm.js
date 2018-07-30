import React from 'react';
import PropTypes from 'prop-types';
import './categoryForm.scss';

const defaultState = {
  name: '',
  amount: 0,
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
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
      name="name"
      placeholder="Category"
      value={ this.state.name }
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

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
