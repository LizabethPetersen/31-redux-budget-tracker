import React from 'react';
import PropTypes from 'prop-types';
import './categoryForm.scss';

const defaultState = {
  title: '',
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
    console.log(this.props, 'hitting the props');

    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form className="category"
        onSubmit={this.handleSubmit}
      >
      <input
        type="text"
        name="title"
        placeholder="Category"
        value={this.state.title}
        onChange={this.handleChange}
      />
      <input
        type="number"
        min="0.00"
        name="amount"
        placeholder="0.00"
        value={this.state.amount}
        onChange={this.handleChange}
      />
      <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
