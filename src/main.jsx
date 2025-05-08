import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from './context/Provider.jsx';
import Form from './pages/Form.jsx';

createRoot(document.getElementById('root')).render(
  <Provider>
  <StrictMode>
    <Form />
  </StrictMode>,
  </Provider>
)
