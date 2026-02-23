import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">

      <header className="navbar">
        <Link href="/">
          <img src="/logo.png" alt="Paygrade+" className="logo" style={{ cursor: 'pointer' }} />
        </Link>
        <nav>
          <Link href="/about" style={{ color: 'white', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          <a href="#products">Products</a>
          <Link href="/contact" style={{ color: 'white', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Upgrade Your Paygrade</h1>
          <p>
            Helping young professionals discover smarter credit cards,
            bank accounts and financial tools.
          </p>
          <button>Explore Offers</button>
        </div>
        <img src="/hero.jpg" alt="Finance Hero" className="hero-img" />
      </section>

      <section id="products" className="products">
        <h2>What We Cover</h2>
        <div className="card-grid">

          <div className="card">
            <img src="/card-demo.jpg" alt="Credit Cards" />
            <h3>Credit Cards</h3>
            <p>Compare top cards and maximize rewards.</p>
          </div>

          <div className="card">
            <img src="/bank-demo.jpg" alt="Bank Accounts" />
            <h3>Bank Accounts</h3>
            <p>Choose the right account for your salary.</p>
          </div>

          <div className="card">
            <img src="/loan-demo.png" alt="Loans" />
            <h3>Loans</h3>
            <p>Smart borrowing for smart growth.</p>
          </div>

        </div>
      </section>

      <section id="about" className="about">
        <h2>About Paygrade+</h2>
        <p>
          Paygrade+ is a financial discovery platform designed for early
          career professionals. We simplify financial products and help you
          make informed decisions.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Join Our Community</h2>
        <p>
          We operate via website and Telegram community. Approval subject
          to partner criteria.
        </p>
        <button className="glass-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '8px' }}
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Join Telegram
        </button>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Paygrade+. All rights reserved.</p>
      </footer>

    </div>
  )
}
