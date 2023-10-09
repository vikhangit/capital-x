import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/home';
import LawLibraty from './pages/LawLibrary/lawLibraty';
import Connect from './pages/Connect/connect';
import Advise from './pages/Advise/advise';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/thu-vien-luat",
    element: <LawLibraty />
  },
  {
    path: "/ket-noi",
    element: <Connect />
  },
  {
    path: "/tu-van",
    element: <Advise />
  }
]);

function App() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
