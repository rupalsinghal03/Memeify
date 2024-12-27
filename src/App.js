import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import("./Components/Home"))
function App() {
  return (
    <div className="App">
      <h2 className='m-1 p-4'>
        Latest Memes? <span><a className='no-style' href='https://www.linkedin.com/in/rupalsinghal03/'>@rupalsinghal</a></span>
      </h2>

      <Router>
        <Suspense fallback="loading memes">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
