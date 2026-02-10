export default function Books({name, author,description,img}){
    return(
        <div>
            
            <p>Book Name: {name}</p>
            <p>Author: {author}</p>
            <p>Decription: {description}</p>
            <img src={img} alt="some text"/>
            
        </div>
    )
}