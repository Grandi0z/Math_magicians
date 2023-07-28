import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import ErrorPage from './routes/ErrorPage';
import background from './assets/images/back.jpg';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/calculator',
          element: <Calculator />,
        },
        {
          path: '/quote',
          element: <Quote />,
        },
      ],
    },
  ],
);

function App() {
  const styles = {
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh',
    padding: '0.9rem 3rem',
    color: '#fff',
  };
  return (
    <div className="App" style={styles}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
