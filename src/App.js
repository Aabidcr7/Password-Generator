
import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-orange-200 via-black-200 to-black-300">
      <h1 className='text-3xl font-bold pt-16 text-blue-900'>Password Generator</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
