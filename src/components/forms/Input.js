import React from 'react';
import classnames from 'classnames';

const Input = ({ onChange, fullWidth = false, ...rest }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      onChange={onInputChange}
      className={
        classnames('py-3 px-4 block shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md', {
          'w-full': fullWidth,
        })
      }
      {...rest}
    />
  );
};

export default Input;
