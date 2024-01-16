import React from 'react';
import img from './computer.jpeg';

const App = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <p>
        Deserunt ipsum dolore consectetur officia aliqua aute ipsum mollit ipsum
        amet. Irure exercitation labore eu labore reprehenderit nisi ullamco
        eiusmod quis ullamco Lorem nostrud. Nostrud laboris duis id elit mollit
        magna. Culpa est culpa excepteur excepteur eiusmod nisi pariatur sint.
        Sunt nulla do sint dolore elit nisi incididunt tempor laborum dolore
        labore ea eiusmod.
      </p>
      <h2> Hello world</h2>
      <p>
        Deserunt ipsum dolore consectetur officia aliqua aute ipsum mollit ipsum
        amet. Irure exercitation labore eu labore reprehenderit nisi ullamco
        eiusmod quis ullamco Lorem nostrud. Nostrud laboris duis id elit mollit
        magna. Culpa est culpa excepteur excepteur eiusmod nisi pariatur sint.
        Sunt nulla do sint dolore elit nisi incididunt tempor laborum dolore
        labore ea eiusmod.
      </p>
      <h1> hello world</h1>
      <h2> hello world</h2>
      <h3> hello world</h3>
      <h4> hello world</h4>
      <h5> hello world</h5>
      <a href='#'> Link</a>
      <ul>
        <li> First item</li>
        <li> Second item</li>
        <li> third item</li>
      </ul>

      {/* <div className='container'>
      </div> */}
      <img src={img} alt='computer' class='img' />
      <br />
      <button class='btn' type='button'>
        regular button
      </button>
      <button class='btn btn-hipster' type='button'>
        hipster button
      </button>

      <br />
      <br />
      <br />

      <div class='alert alert-danger'>hello from danger</div>
      <br />
      <div class='alert alert-success'>hello from success</div>

      <br />
      <br />

      <form class='form'>
        <h4>contact form</h4>
        <div class='form-row'>
          <label for='name' class='form-label'>
            Name
          </label>
          <input
            type='text'
            placeholder='hello there'
            id='name'
            class='form-input'
          />
        </div>
        <div class='form-row'>
          <label for='number' class='form-label'>
            Number
          </label>
          <input type='number' id='number' class='form-input' />
        </div>
        <div class='form-row'>
          <label for='email' class='form-label'>
            Email
          </label>
          <input type='email' id='email' class='form-input' />
          <small class='form-alert'>please provide value</small>
        </div>
        <div class='form-row'>
          <label for='textarea' class='form-label'>
            Textarea
          </label>
          <textarea class='form-textarea'>Default Value</textarea>
        </div>
        <button type='submit' class='btn btn-block'>
          submit
        </button>
      </form>
      <div class='loading'></div>
      <br />
      <br />
      <div class='title'>
        <h2>section title</h2>
        <div class='title-underline'></div>
      </div>
    </>
  );
};

export default App;
