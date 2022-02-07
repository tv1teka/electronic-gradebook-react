import './App.css';
// import Popup from './components/Popup';
import Table from './components/Table';

function App() {

  // const Out = (e) => {
  //   document.getElementById('gradeInput').value = e.target.innerHTML;
  // }
  return (
    <div className="App">
       <h3>Электронный журнал:</h3>
        <Table />

    </div>
  );
}

export default App;
