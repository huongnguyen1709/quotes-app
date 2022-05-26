import styles from '../../styles/Quotes.module.css'
import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
   const res = await fetch('https://quotable.io/quotes?page=1')
   const data = await res.json()

   return {
       props: {quotes: data.results}
   }
   
}

const Quotes = ({quotes}) => {
    
    return ( 
       <>
            <Head>
                <title>Quotes | Listing</title>
                <meta name='keywords' content='quotes' />
            </Head>
            <div>
                <h1>All Quotes</h1>
                {quotes.map(quote => (
                    <Link href={`/quotes/${quote._id}`} key={quote._id}>
                        <a className={styles.single}><h3>{quote.content}</h3></a>
                    </Link>
                ))}
            </div>
       </>
    );
}
 
export default Quotes;