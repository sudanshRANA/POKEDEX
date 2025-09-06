import { useNavigate } from 'react-router-dom';
import './App.css'
import CustomRoutes from './routes/CustomRoutes';

function App() {
  const navigate = useNavigate();

  return (
    <div className="outer-pokedex">
      <h1 onClick={() => navigate('/')} id="pokedex-heading">
        PokeDex
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App
