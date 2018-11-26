class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onListItemMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
      <li style={style} 
        onMouseEnter={this.onListItemMouseEnter.bind(this)}
        onMouseLeave={this.onListItemMouseLeave.bind(this)} >
        {this.props.item}
      </li>
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