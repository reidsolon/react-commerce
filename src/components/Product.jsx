import React from "react"
import { connect } from 'react-redux'
import { add, remove, InCart } from './store/cart'

const Product = props => {
    return (
        <div>
            <div key={props.product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                        src={props.product.imageSrc}
                        alt={props.product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={props.product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {props.product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{props.product.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${props.product.price}</p>
                </div>
            </div>
            <div className="d-block">
                {!props.in_cart(props.product)
                    ? (<button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 w-100 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:w-auto sm:text-sm"
                        onClick={() => props.add(props.product)}>
                        Add to cart
                    </button>)
                    : (<button className="btn btn-danger d-block" onClick={() => props.remove(props.product)}>Remove</button>)}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (product) => dispatch(add(product)),
        remove: (product) => dispatch(remove(product))
    }
}

const mapStateToProps = state => {
    return {
        in_cart: (product) => InCart(state, product),
        items: state.cartSlice.items,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)