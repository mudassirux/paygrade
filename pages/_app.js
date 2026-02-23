import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Paygrade+ | Bridging Users & Financial Brands</title>

        <meta
          name="description"
          content="Paygrade+ bridges the gap between young professionals and trusted financial brands by simplifying credit cards, banking products, loans, and financial services."
        />

        <meta
          name="keywords"
          content="credit cards India, salary account comparison, financial services platform, banking products India, young professionals finance, personal loans, business loans"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Paygrade+ | Financial Discovery Platform" />
        <meta
          property="og:description"
          content="We bridge the gap between users and leading financial brands, helping professionals make informed financial decisions."
        />
        <meta property="og:image" content="/hero.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paygrade+" />
        <meta
          name="twitter:description"
          content="Connecting professionals with trusted financial products. Upgrade your paygrade today."
        />
        <meta name="twitter:image" content="/hero.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
