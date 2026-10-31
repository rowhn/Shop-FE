import { Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Phones from './pages/Phones/Phones.jsx';
import PhoneDetail from './pages/PhoneDetail/PhoneDetail.jsx';
import Emi from './pages/Emi/Emi.jsx';
import Repairs from './pages/Repairs/Repairs.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


/** All website addresses (URLs) and the page file that shows each. */
export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="phones" element={<Phones />} />
        <Route path="phones/:slug" element={<PhoneDetail />} />
        <Route path="emi" element={<Emi />} />
        <Route path="repairs" element={<Repairs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}