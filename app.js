const BlueCheese = () => (
  <li>Blue cheese</li>  
);

const Mangoes = () => (
  <li>Mangoes</li>
);

const GroceryList = () => (
  <ul>
    <BlueCheese />
    <Mangoes />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));