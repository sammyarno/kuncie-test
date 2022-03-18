import { Route, Routes } from 'react-router-dom';

import Home from './containers/home';
import Detail from './containers/detail';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
);

export default Routing;
