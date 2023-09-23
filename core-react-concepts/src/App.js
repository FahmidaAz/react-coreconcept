import logo from './logo.svg';
import './App.css';

function App() {
  const productList = [
    {name: 'Photoshop', price:'$100.99'},
    {name:'PDF Reader',price:'$30.99'},
    {name:'Illustration', price:'$45.85'}
  ];
  for(let index = 0; index < productList.length; index++) {
   let product= productList[index];
  }
  return (
    <div className="App">
      <header className="App-header">

      {/* simillar in patter different in data */}
        <Person name = "Sakib Al Hasan" best="Al-rounder"></Person>
        <Person name ="Mushfiq rahim" best="Wicket Keeper"></Person>
        <Person name="Mashrafi bin Mortuza" best="Captain"></Person>
        <Person name="Tamim Iqbal" best="Batsman"></Person>
        
        <Product></Product>
       </header>
    </div>
  );
  function Person(props){
    const style ={
      border: '2px solid red',
      margin: '10px',
      padding: '10px 10px'
    }
    return (
      <div style ={style}>
        <h1>Name:{props.name}</h1>
        <h3>Best:{props.best}</h3>
      </div>
    )
  }
   function Product (props){
    const styleProduct={
      border: '2px solid gray',
      backgroundColor: 'lightgray',
      width:'300px',
      height: '175px',
      margin: '50px',
      padding: '75px'
    }
    console.log(props);
     return (
      <div style={styleProduct}>
         <h3>{props.name}</h3>
         <h2>{props.price}</h2>
         <p>Description</p>
          {/* <p><link>link</link></p> */}
      </div>
     )
   }
}

export default App;
