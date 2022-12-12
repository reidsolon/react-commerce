import Product from './Product'
import { Component } from 'react'
import { connect } from 'react-redux'

const products = [
    {
        id: 1,
        name: 'Apple',
        price: 10,
        imageSrc: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        imageAlt: "Product"
    },
    {
        id: 2,
        name: 'Orange',
        price: 20.3,
        imageSrc: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        imageAlt: "Product"
    },
    {
        id: 3,
        name: 'Orange',
        price: 20.3,
        imageSrc: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        imageAlt: "Product"
    },
    {
        id: 4,
        name: 'Strawberry',
        price: 15.4,
        imageSrc: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        imageAlt: "Product"
    },
]

class ProductArea extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {products.map(product => {
                        return (<div className='col-md-3' key={product.id}>
                            <Product product={product} />
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.cartSlice.items
    }
}

export default connect(mapStateToProps, {})(ProductArea)