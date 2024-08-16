import Header from './Header/Header';
import Card from './Card/Card';
import Statistic from './Statistic/Statistic';

function App() {

  return (
    <>
      <Header/>
      <div className='container'>
        <div className='statistics'>
          <Statistic/>
        </div>
        <Card/>
      </div>

    </>

  );
}

export default App
