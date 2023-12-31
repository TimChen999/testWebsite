import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Fourier from './Fourier.png'; /*Import image to be able to use it*/

/*Additional image component*/
function Image(){
  return (
    <img src={Fourier} alt="Component added to App.js"/>
  );
}

/*Parent and child*/
function Child({ param }){
  return (
    <h2>
      {param}
    </h2>
  );
}

function Parent(){
  return (
    <h3>
      <h2>Display projects:</h2>  
      <Child param={"Project 1"}/>  
      <Child param={"Project 2"}/>  
    </h3>
  );
}

function Parent2(){
  return (
    <h3>
      <h3>Display additional projects:</h3>  
      <Child2 param={"Project 3"}/>  
      <Child2 param={"Project 4"}/>  
    </h3>
  );
}

function Child2({ param }){
  return (
    <h4>
      {param}
    </h4>
  );
}

/*Action handler for button*/
function action(){
  alert('User Authorized');
}

/*This function defines front end web page (different from task 1) */
function App() {
  return (
    /*Add custom implementation here (It needs at least one thing)*/
    /*https://react.dev/learn then https://react.dev/learn/describing-the-ui */
    /*Projects themselves are componenets, but need to make 2 additional subcomponents (Use botton and text box as materialUI elements*/
    <div>
      <Image />
      <Image />
      <Button onClick={action} variant="contained">Press to authorize user</Button>
      <TextField id="outlined-basic" label="Enter text" variant="outlined" />
      <Parent />
      <Parent2 />
    </div>
  );
}

export default App;
