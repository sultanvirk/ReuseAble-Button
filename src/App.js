import React from 'react';
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold mt-12'>Re-Useable Button (using props)</h1>
      <h1 className='text-xl font-semibold mt-12'>It's a reuseable button, we can modify its <span className='font-bold'>" color, title & function "</span> according to component's requirement</h1>
      <Button title="Let's change the title" onClick={handleClick} style="my-4" />
    </div>
  );
};

export default App;
