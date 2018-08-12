import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/categoryActions';
import Form from '../category-form/form';
import Category from '../category/category';
import './landing.scss';

const mapStateToProps = (store) => {
  return {
    categories: store.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

class Landing extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <div className="category-form">
          <Form onComplete={ categoryCreate }/>
        </div>

        <div className="category-list">
          {
           categories.map(category => <Category category={category} key={category.id} />)
          }
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
