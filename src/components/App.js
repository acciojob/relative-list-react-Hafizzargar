import React from 'react'

const App = () => {
 const relatives = [
    "Uncle John",
    "Aunt Mary",
    "Cousin Sarah",
    "Grandma Emma",
    "Grandpa Joe"
  ];

  return (
    <div>
      <h2>Relatives to Visit This Diwali</h2>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App
