export default function Book({book}){
    const {name, price} = book
    return (
        <div className="box">
            <h3>book Name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    )
 }