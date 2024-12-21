// components/FormComponent.tsx
import React from 'react';

const TestGrid: React.FC = () => {
  return (
    <div dir='rtl'>

<form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1">Name</label>
        <input type="text" id="name" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="age" className="mb-1">Age</label>
        <input type="number" id="age" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="city" className="mb-1">City</label>
        <input type="text" id="city" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="department" className="mb-1">Department</label>
        <input type="text" id="department" className="p-2 border rounded" />
      </div>
      {/* Add more fields as needed */}
      <div className="flex flex-col">
        <label htmlFor="field5" className="mb-1">Field 5</label>
        <input type="text" id="field5" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="field6" className="mb-1">Field 6</label>
        <input type="text" id="field6" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="field7" className="mb-1">Field 7</label>
        <input type="text" id="field7" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="field8" className="mb-1">Field 8</label>
        <input type="text" id="field8" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="field9" className="mb-1">Field 9</label>
        <input type="text" id="field9" className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="field10" className="mb-1">Field 10</label>
        <input type="text" id="field10" className="p-2 border rounded" />
      </div>
    </form>

    </div>
  );
};

export default TestGrid;
