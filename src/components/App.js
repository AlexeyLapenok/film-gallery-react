import './App.css';
import Header from './header/Header';
import Filter from './main/movies/Filter/Filter';
import Cards from './main/movies/Cards/Cards';
import Pagination from './main/movies/Pagination/Pagination';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="background">
        <section className="container">
          <Filter />
          <Cards />
        </section>
        <Pagination />
      </main>
    </div>
  );
}

export default App;
