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
const App=()=>(
       <>
         <h1>Score : {score}/ {wickets}</h1>
         <button onClick={()=>addScore(1)}>1</button>
         <button onClick={()=>addScore(2)}>2</button>
         <button onClick={()=>addScore(3)}>3</button>
         <button onClick={()=>addScore(4)}>4</button>
         <button onClick={()=>addScore(5)}>5</button>
         <button onClick={()=>addScore(6)}>6</button>
       </>
);

const rootElement= ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />);



