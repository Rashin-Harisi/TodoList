
import './App.css';
import Layout from './comonents/layout/layout';
import ToDo from './comonents/todoApp/todo';

function App() {
  return (
    <div className="App">
      <Layout>
        <ToDo/>
      </Layout>
      <div className='designerName'>Designed by @Rashin </div>

    </div>
  );
}

export default App;
