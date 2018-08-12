import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import * as categoryActions from '../../action/categoryActions';
import './item.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
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
      <h5>Budget Category: <br/>{category.title}</h5>
      <p>Amount: ${category.amount}</p>
      <CategoryForm category={category} onComplete={categoryUpdate}/>
      <button onClick={() => categoryRemove(category)}>Delete Category</button>

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
