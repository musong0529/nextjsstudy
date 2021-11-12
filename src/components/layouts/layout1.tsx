import Header from '@src/components/layouts/Header';
import Footer from '@src/components/layouts/Footer';

const Layout1 = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout1;
