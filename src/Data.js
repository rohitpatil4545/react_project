import React from 'react';

class Data extends React.Component {
  render() {
    const items = ['Reading', 'Writing', 'Singing', 'Dancing', 'Cooking'];
    return (
      <>
        <div>
          <h2 style={{ textAlign: 'center' }}>This is a list of Hobbies</h2>
        </div>
        <ul style={{ listStyle: 'none', textAlign: 'center',fontSize:'20px' }}>
          {items.map((item, index) => (
            <li key={index}>
              <span style={{ marginRight: '10px' }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Data;
