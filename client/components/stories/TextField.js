import React from 'react';
import Field from './Field';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
  // input styles here
`

const TextField = ({
  disabled = false,
  label,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <Field name={name} label={label}>
    <Input
      disabled={disabled}
      onChange={onChange}
      id={name}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  </Field>
);

TextField.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default TextField;