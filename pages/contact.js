import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Contact | Paygrade+</title>
            </Head>

            <header className="navbar">
                <Link href="/">
                    <img src="/logo.png" alt="Paygrade+" className="logo" style={{ cursor: 'pointer' }} />
                </Link>
                <nav>
                    <Link href="/#about" style={{ color: 'white', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>About</Link>
                    <Link href="/#products" style={{ color: 'white', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>Products</Link>
                    <Link href="/contact" style={{ color: '#e10600', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
                </nav>
            </header>

            <main className="contact-page">
                <div className="contact-content">
                    <h1>Get in Touch</h1>
                    <p>Have questions about partnerships or our financial products? Reach out to us below.</p>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                        </div>
                        <button type="submit" className="glass-button form-submit">Send Message</button>
                    </form>

                    <div className="telegram-section">
                        <p>Or join our community directly:</p>
                        <a href="#" style={{ textDecoration: 'none' }}>
                            <button className="glass-button" type="button">
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
                        </a>
                    </div>
                </div>
            </main>

            <footer className="footer" style={{ marginTop: 'auto' }}>
                <p>© {new Date().getFullYear()} Paygrade+. All rights reserved.</p>
            </footer>
        </div>
    )
}
