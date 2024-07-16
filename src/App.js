import './App.css';
import Grid from './componentes/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import usuarios from './db/data';

function App() {
   return (
    <div className="App">
      <Grid personas={usuarios} />
    </div>
  );
}

export default App;
