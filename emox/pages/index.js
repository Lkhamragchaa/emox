// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/products">
        <a>View Products</a>
      </Link>
    </div>
  );
};

export default Home;
