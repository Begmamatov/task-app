import AppRouter from "./router/AppRouter";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh'
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
