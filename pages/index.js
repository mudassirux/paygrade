export default function Home() {
  return (
    <div className="container">

      <header className="navbar">
        <img src="/logo.png" alt="Paygrade+" className="logo" />
        <nav>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
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
            <img src="/card-demo.jpg" alt="Loans" />
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
        <button>Join Telegram</button>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Paygrade+. All rights reserved.</p>
      </footer>

    </div>
  )
}
