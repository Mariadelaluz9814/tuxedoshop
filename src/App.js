import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <DataProvider>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>r
        <Route path='/cart' element={<CartContent/>}></Route>
       </Routes>
     </BrowserRouter>
    </DataProvider>
  )
}

export default App;
