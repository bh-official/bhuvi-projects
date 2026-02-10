export default function CoolerButton(){
    function handleClick(name){
        console.log(`Hello ${name}`);
    }
    return(
        <div>
            <button onClick={()=> handleClick("Bhuvi")}>Click Me!!!</button>
            
            <button onClick={function(){
                handleClick("Bhuvi again")
            }}>Click Me Again!!!</button>
        </div>
    )
}