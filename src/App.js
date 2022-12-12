import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Navigation from './components/Navigation'
import Cart from './components/Cart'
import ProductArea from './components/ProductArea'
import { setItems } from './components/store/cart';

class App extends Component {
  componentDidMount() {
    this.props.set()
  }
  render() {
    return (
      <div>
        <Navigation />
        <Cart />
        <ProductArea />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set: () => dispatch(setItems())
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
