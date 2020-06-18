import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return (
    <div className='hey'>
      <h1>Hello React !!</h1>
      <div>Hey</div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
