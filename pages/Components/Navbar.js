import Link from 'next/link'

function Navbar() {
    return (
        <div>
            <h1>nav bar</h1>
            <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/Posts">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
        </div>
    )
}

export default Navbar
