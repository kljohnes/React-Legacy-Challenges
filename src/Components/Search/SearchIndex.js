import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {

      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchValue: ""
    }
  }

  searchFunction = (event) => {
    this.setState({ searchValue: event.target.value })

  }

  render() {
    let things = this.state.things
    let searchValue = this.state.searchValue

    return (
      <div>
        <Input placeholder='Search Here' type='text' value={searchValue} onChange={this.searchFunction.bind(this)} />
        <h3>Results:</h3>
        {things.filter((thing) => {
        if (searchValue === "") {
            return thing
          } else if (thing.toLowerCase().includes(searchValue.toLowerCase())) {
            return thing
          }
        }).map((thing, i) => {
          return <ul key={i}>
              <li>{thing}</li></ul>
          })}
      </div>

    )
  }
}

export default SearchIndex








