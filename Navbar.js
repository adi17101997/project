import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
