import React, { useState } from 'react';
import Head from 'next/head'    
import styles from '../styles/Quotes.module.css'

const Random = () => {
    const [quote, setQuote] = useState('');

    const getQuote = async () => {
        const res = await fetch('https://quotable.io/random')
       const data = await res.json()

       setQuote(data)
       
    }

    const display = () => {
        return (
            <div className={styles.single}>
                <h2>{quote.content}</h2>
                <h3>{quote.author}</h3>
                <p>tags: {quote.tags.join(", ")}</p>
            </div> 
        )
    }

    return (  
        <>
            <Head>
                <title>Quotes | Random</title>
                <meta name='keywords' content='quotes' />
            </Head>
            <div>
                <h1>Random Quote</h1>
                <button onClick={getQuote}>Get Quote</button>
            { quote ? display() : null }
                
            </div>
        </>
    );
}
 
export default Random;