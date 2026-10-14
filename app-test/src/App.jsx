
function Greetings(props) {
  console.log(props)
  return <h1>Welcome to my react class, {props.name}! thanks I'm {props.age} years old </h1>

}






function App() {

let age = 70;

// return <Greetings name='Shade'/> single

return(
  <div className="">
    <Greetings name='Shade' age={50}/>
    <Greetings name='Jimmy' age={age}/>

  </div>
)

}


export default App