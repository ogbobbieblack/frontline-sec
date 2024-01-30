
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { About, Contact, Home, Services } from '../pages'
import Review from '../pages/Review';

const Layout = () => {
  return (
    <div className="bg-[#071f2c] text-[#F8F8F8]">
      <Nav />
      <Home />
      <About />
      <Review />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout