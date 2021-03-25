import './App.css';
import Table from './Table';
import tableData from './tableData';

function App() {

  return <Table headers={tableData.headers} rows={tableData.rows} />;

}

export default App;
