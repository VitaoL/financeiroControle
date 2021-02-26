import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Redirect from './pages/Redirect';
import Financias from './pages/Financias';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/controle" component={Financias} />
        <Route exact path="/" component={Redirect} />
      </BrowserRouter>
    </div>
  );
}

export default App;
