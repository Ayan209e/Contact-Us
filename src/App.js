import './App.css';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import FormHeader from './components/Header/FormHeader';
import Navigation from './components/NavBar/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <FormHeader/>
      <Form/>
    </div>
  );
}

export default App;
