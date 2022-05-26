import Head from 'next/head' 
import styles from '../styles/Quotes.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://zenquotes.io/api/today')
    const data = await res.json()
 
    return {
        props: {quote: data}
    }
    
 }

const Daily = ({quote}) => {

    return ( 
        <>
            <Head>
                <title>Quotes | Daily</title>
                <meta name='keywords' content='quotes' />
            </Head>
            <div >
                <h2>Get one quote for the day</h2>
                {
                    quote && quote.map((q, index) => (
                        <div className={styles.single} key={index}>
                                <h2>{q.q}</h2>
                                <h3>{q.a}</h3>
                        </div>
                    ))
                }    
            </div> 
        </>
     );
}
 
export default Daily;