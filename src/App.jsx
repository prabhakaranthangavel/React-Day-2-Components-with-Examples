// Example 7:function component and props using
function Hello(props) {
  console.log(props);
  return (
    <p>Hai Function Component {props.username}</p>
  )
}
function App() {
  const user1 = "Prabha";
  const user2 = "Karan"
  return (
    <>
      <div>
        <h1>Welcome To React World!</h1>
        < Hello username = {user1} />
        < Hello username = {user2}/>
         </div>   
    </>
  )
}

export default App
