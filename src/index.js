import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import init from './init.jsx';

const runApp = () => {
  const mountNode = document.getElementById('root');
  const root = ReactDOM.createRoot(mountNode);
  const vdom = init();
  root.render(vdom);
};

runApp();
