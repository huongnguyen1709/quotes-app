export const getStaticPaths = async () => {
    const res = await fetch('https://quotable.io/quotes')
   const data = await res.json()

   const paths = data.results.map(quote => {
       return {
           params: { id: quote._id.toString() }
       }
   })

   return {
       paths,
       fallback: false
   } 
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://quotable.io/quotes/${id}`)
    const data = await res.json()

    return {
        props: {quote: data}
    }
    
 }

const Details = ({quote}) => {

    return ( 
        <div>
            <h2>{quote.content}</h2>
            <h3>{quote.author}</h3>
            <p>tags: {quote.tags.join(", ")}</p>
        </div>
     );
}
 
export default Details;