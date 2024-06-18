// let reactImg=React.createElement('img', {src:"https://files.codingninjas.in/coding-ninjas-24647.png", width:400});
// ReactDOM.createRoot(document.getElementById('root')).render(reactImg);

let arr=[
    {
        name:"Aryan",
        email:"aryan@gmail.com"
    },
    {
        name:"vishu",
        email:"vishu@gmail.com"
    },
    {
        name:"rbdii",
        email:"rbdii@gmail.com"
    },
    {
        name:"nayak",
        email:"nayak@gmail.com"
    },
]
let score=0;
let wickets=0;
let addScore=(val)=>{
    score+=val;
    rootElement.render(<App />);
}
const Run=()=>{
    return(
        <>
         <button onClick={()=>{handleScoreClick(1)}}>1</button>
         <button onClick={()=>{handleScoreClick(2)}}>2</button>
         <button onClick={()=>{handleScoreClick(3)}}>3</button>
         <button onClick={()=>{handleScoreClick(4)}}>4</button>
         <button onClick={()=>{handleScoreClick(5)}}>5</button>
         <button onClick={()=>{handleScoreClick(6)}}>6</button>
        </>
    )
}
const handleScoreClick=(val)=>{
    document.getElementById('run').value=val;
}
const handleFormSubmit=(event)=>{
    console.log("clicked")
     event.preventDefault()
     const run=Number.parseInt(document.getElementById('run').value);
     const comment=document.getElementById('comment').value
     document.getElementById('comment').value=""
     console.log(comment)
     addScore(run)
}
const Form=()=>{
    return(
        <form onSubmit={handleFormSubmit}>
           <input placeholder="score" id="run"/>
           <input placeholder="comment" id="comment"/>
           <button>submit</button>
        </form>
    )
}
const App=()=>(
       <>
         <h1>Score : {score}/ {wickets}</h1>
         <Run/>
         <br/>
         <br/>
         <Form/>
         <hr/>
       </>
);

const rootElement= ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />);



