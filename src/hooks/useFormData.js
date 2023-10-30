import { useState } from 'react';

export const useFormData = (initalState) => {
  const [formData, setFormData] = useState(initalState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, handleInputChange };
};
