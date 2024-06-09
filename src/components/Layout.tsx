import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='m-2 mt-20 sm:m-36'>{children}</main>
    </div>
  );
};


export default Layout