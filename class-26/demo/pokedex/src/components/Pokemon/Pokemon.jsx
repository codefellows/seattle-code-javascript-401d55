// what does this component do / why do we need?
//  -> it renders a name and type.
// -> if we give this component 2 strings (name and type) it should appear on the screen.
function Pokemon(props) {
  return (
    <div className="pokemon">
      <p>Name: {props.name}</p>
      <p>Type: {props.type}</p>
    </div>
  )
}

export default Pokemon;