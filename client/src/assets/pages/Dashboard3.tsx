import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModalForm() {
  const [formData, setFormData] = useState({ name: '', recipeName: '', ingredients: '', recipeSteps: '' });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const API_BASE_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:3000';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send data to server
    const res = await fetch(`${API_BASE_URL}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });

    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', text);

    if (res.ok) {
    setFormData({ name: '', recipeName: '', ingredients: '', recipeSteps: '' });    
    navigate('/create');
    } else {
    alert(`Something went wrong! Status: ${res.status}`);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="recipeName">Recipe Name:</label>
      <input name="recipeName" value={formData.recipeName} onChange={handleChange} required />

      <label htmlFor="ingredients">Ingredients:</label>
      <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />

      <label htmlFor="recipeSteps">Recipe Steps:</label>
      <textarea name="recipeSteps" value={formData.recipeSteps} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}
