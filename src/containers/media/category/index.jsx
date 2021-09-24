import React, { Fragment } from 'react';

import { Form } from 'react-bootstrap';

const Category = ({
  categoryList,
  currentCategory,
  setCurrentCategory,
  setCurrentCategoryId
}) => {
  return (
    <Fragment>
      <Form.Control
        as="select"
        value={currentCategory}
        onChange={(e) => {
          setCurrentCategoryId(
            e.target[e.target.selectedIndex].getAttribute('data-remove')
          );
          setCurrentCategory(e.target.value);
        }}
      >
        {categoryList &&
          categoryList.map((category) => (
            <option data-remove={category.id} key={category.id}>
              {category.display_name}
            </option>
          ))}
      </Form.Control>
    </Fragment>
  );
};

export default Category;
