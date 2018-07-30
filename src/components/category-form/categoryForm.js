import React from 'react';
import PropTypes from 'prop-types';

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
    const { value } = event.target;
    this.setState({ name: value, amount: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    console.log(this.props, 'These are my props');  // eslint-disable-line
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
