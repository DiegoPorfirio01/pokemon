import Header from '@/components/Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main className='m-2 sm:mx-36'>{children}</main>
    </div>
  );
};


export default Layout