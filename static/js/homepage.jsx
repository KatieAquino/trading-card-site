"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h2>Welcome Balloonicorn Fan!</h2>
      <a href='/cards'>Check Out Our Cards!</a>
      <img src='/static/img/balloonicorn.jpg' />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
