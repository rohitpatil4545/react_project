import React from 'react';

  export class List extends React.Component {
  handleAddition = () => {
    let a =parseInt(prompt("Enter the number: "));
    let fact=1;
    for (let i=1; i<=a; i++)
    {
        fact *=i;
    }
    alert(`Factorial is: ${fact}`); 
  };

  render() {
    return (
      <button onClick={this.handleAddition}>Output</button>
    );
  }
}

// export default List
