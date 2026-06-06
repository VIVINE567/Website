'use client';

import { useState } from 'react';

/**
 * Global form input component with floating label.
 * Change styling here to update all input/textarea fields across the app.
 */
const baseClass = "form-input";

const FormInput = ({
  as = "input",
  className = "",
  placeholder,
  onChange,
  value: controlledValue,
  ...props
}) => {
  const Component = as === "textarea" ? "textarea" : "input";
  const classes = `${baseClass}${as === "textarea" ? " form-textarea" : ""} ${className}`.trim();
  const [internalValue, setInternalValue] = useState("");

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const filled = value && String(value).length > 0;

  const handleChange = (e) => {
    if (controlledValue === undefined) setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div data-component="FormInput" className={`form-field-floating${filled ? " filled" : ""}`}>
      <Component
        className={classes}
        placeholder=" "
        value={value}
        onChange={handleChange}
        {...props}
      />
      {placeholder && <label className="form-floating-label">{placeholder}</label>}
    </div>
  );
};

export default FormInput;
