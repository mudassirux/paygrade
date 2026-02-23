import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>About | Paygrade+</title>
            </Head>

            <header className="navbar">
                <Link href="/">
                    <img src="/logo.png" alt="Paygrade+" className="logo" style={{ cursor: 'pointer' }} />
                </Link>
                <nav>
                    <Link href="/about" style={{ color: '#e10600', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>About</Link>
                    <Link href="/#products" style={{ color: 'white', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>Products</Link>
                    <Link href="/contact" style={{ color: 'white', marginLeft: '25px', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
                </nav>
            </header>

            <main className="about-page">
                <div className="about-content">
                    <h1>About Paygrade+</h1>
                    <p className="subtitle">Bridging Professionals and Financial Brands</p>

                    <section className="text-section">
                        <p>
                            Paygrade+ is a financial discovery platform designed for young professionals and salaried individuals navigating their financial growth.
                            We bridge the gap between users and trusted financial brands by simplifying access to credit cards, bank accounts, and loan products.
                        </p>
                    </section>

                    <section className="text-section">
                        <h2>What We Do</h2>
                        <p>We curate and present financial products in a structured and transparent way, helping users:</p>
                        <ul>
                            <li>Compare relevant options</li>
                            <li>Understand key benefits and charges</li>
                            <li>Apply through verified partner platforms</li>
                            <li>Receive additional cashback incentives, where applicable</li>
                        </ul>
                        <p>Our platform aims to make financial discovery clearer and more rewarding.</p>
                    </section>

                    <section className="text-section">
                        <h2>Cashback Model</h2>
                        <p>
                            In select cases, Paygrade+ may share a portion of the commission earned from partner platforms as cashback to users after successful approval and validation.
                        </p>
                        <p>Cashback eligibility:</p>
                        <ul>
                            <li>Subject to successful application and approval</li>
                            <li>Processed after confirmation from partner platforms</li>
                            <li>Provided in accordance with campaign terms</li>
                        </ul>
                        <p className="highlight-text">We do not guarantee approvals. All applications are reviewed by the respective financial institution.</p>
                    </section>

                    <section className="text-section">
                        <h2>Our Commitment</h2>
                        <p>We are committed to:</p>
                        <ul>
                            <li>Transparent communication</li>
                            <li>Responsible financial positioning</li>
                            <li>Compliance with partner and platform policies</li>
                        </ul>
                        <p>Paygrade+ operates independently and is not directly affiliated with banks or financial institutions.</p>
                    </section>
                </div>
            </main>

            <footer className="footer" style={{ marginTop: 'auto' }}>
                <p>© {new Date().getFullYear()} Paygrade+. All rights reserved.</p>
            </footer>
        </div>
    )
}
