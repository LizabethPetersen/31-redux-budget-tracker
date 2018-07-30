import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../form/form';
import * as categoryActions from '../../action/categoryActions';

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
      <Form category={category} onComplete={categoryUpdate}/>
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


const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);
