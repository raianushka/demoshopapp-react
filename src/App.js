import Products from './components/Products.js'
import './App.css';
import NewProduct from './components/NewProduct.js';

function App() {
   
  const products=[
    {
      id: 'p1',
      title:'Nirma',
      amount:100,
      date: new Date(2021, 8,10),
    },
    {
      id: 'p2',
      title:'Surf Excel',
      amount:200,
      date: new Date(2021, 2, 2),
    },
    {
      id: 'p3',
      title:'Tide',
      amount:130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title:'Ariel',
      amount:150,
      date: new Date(2021, 12, 30),
    },
  ];

function printProductData(data){
  
  console.log(data);
}

  return (
  <div>
    <NewProduct pranay={printProductData}/>
    <Products items={products}/>
  </div>
  );
}

export default App;
