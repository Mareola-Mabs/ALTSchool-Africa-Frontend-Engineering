// Car Component
const Car = (props) => {
  console.log(props); // {data: {brand: "Tesla", id: 1}, brand: '1x625', price: "$1", manufactureYear: "2025"}
  console.log(props.model); // 1x625

  const {data: {id, brand, year, color}, model, manufactureYear} = props // Destructuring the props object
  console.log(id, color, manufactureYear) // 1, Red, 2025

  return <div className="car">{`${props.data.brand} ${props.model}`}</div>;
};

// Using Special Props
const Nav = (props)=>{
  return(
    <div>{props.children}{props.size}</div>
  )
}

// Create root Component
const App = () => {
  const data = {
    price: "$1",
    manufactureYear: "2025"
  } // data to be used as props


  const carData = [
    {
      brand: 'Ford',
      color: 'red',
      year: "2020"
    },
    {
      brand: 'Mercedes',
      color: 'black',
      year: "2025"
    },
    {
      brand: 'Lexus',
      color: 'black',
      year: "2025"
    }
  ]

  const ListItems = ()=>{
    return carData.map(item =>{
      return <li key={item.brand} year={item.year}>{item.brand}</li>
    })
  }

  return (
    <div>
      <Car data={{  
        id: 1,
        brand: "Tesla",
        year: 2020,
        color: "Red"
      }} 
        model="1x625" {...data} />

        <ul>
          <ListItems/>
        </ul>

        <Nav size="200px">
          <h1>A Child</h1>
        </Nav>
    </div>
  );
};

export default App;
