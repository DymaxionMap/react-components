class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}

const GroceryList = (props) => {
  const groceryListItems = props.items.map(item => <GroceryListItem item={item} />);
  return (
    <ul>
      {groceryListItems}
    </ul>
  );
};

ReactDOM.render(<GroceryList items={['Cheddar Cheese', 'Dragonfruit', 'Bolillo Roll']} />, document.getElementById('app'));