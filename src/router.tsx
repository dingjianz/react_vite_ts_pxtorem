import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageH5 from 'pages/h5';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageH5 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
