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
let jsxHeading=(
       <table>
             <tr>
                 <th>Name</th>
                <th>Email</th>
             </tr>
             {
                arr.map((student)=>(
                        <tr>
                             <td>{student.name}</td>
                             <td>{student.email}</td>
                        </tr>
                    )
                )
             }
       </table>
);

ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);



