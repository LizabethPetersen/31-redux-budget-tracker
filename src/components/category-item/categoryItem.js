import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import * as categoryActions from '../../action/categoryActions';
import './item.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;
    return (
      <div className="category" key={key}>
      <h1>{ category.name }</h1>
      <button onClick={() => categoryRemove(category)}>Delete Category</button>
      <CategoryForm category={category} onComplete={categoryUpdate}/>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Category);
