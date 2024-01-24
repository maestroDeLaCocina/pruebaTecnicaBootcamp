
import './App.css';
import { Counter } from './bases/hooks/Counter';
import { Form } from './bases/hooks/Form';
import { MultipleCounter } from './bases/hooks/MultipleCounter';
import { MultipleInputForm } from './bases/hooks/MultipleInputForm';
import { Calis } from './componets/calis';
import { EffectCleaunUp } from './bases/useEffect/EffectCleunUp';
import { CrudAPI } from './bases/pruebaTecnicaBootcamp/crudAPI';


function App() {
  return (
    <div className="App">
        <CrudAPI/>
    </div>
  );
}

export default App;
