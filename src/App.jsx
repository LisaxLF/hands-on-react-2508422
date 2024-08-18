function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="Stargazer" />
          <h1>Meet the <b><i style={{color: "steelblue", fontSize: "2.5rem"}}>{name}</i></b></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
            <button className="outline" onClick={() => alert('Hi there')}>
              click me
            </button>
        </hgroup>
      </article>
    </div>
  )
  
}
export default App
