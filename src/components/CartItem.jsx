import { connect } from "react-redux"
import { decrement, increment, change, remove } from "./store/cart"
const CartItem = props => {
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-3/5">
                <div className="w-30">
                    <img className="h-24" src={props.product.imageSrc} alt={props.product.imageAlt} />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{props.product.name}</span>
                    <span className="text-center w-1/5 font-semibold text-sm">${props.product.price}</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => props.remove(props.product)}>Remove</a>
                </div>
            </div>

            <div className="flex justify-center w-1/2">
                <svg onClick={() => props.dec(props.product)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input className="mx-2 border text-center w-8" type="number" value={props.product.qty} onChange={(event) => props.cha(props.product, event.target.value)} />

                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => props.inc(props.product)}>
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="text-center w-1/4 font-semibold text-sm">${parseFloat(props.product.qty * props.product.price).toFixed(2)}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        remove: (product) => dispatch(remove(product)),
        cha: (product, value) => dispatch(change({ id: product.id, value: value })),
        inc: (product) => dispatch(increment(product)),
        dec: (product) => dispatch(decrement(product))
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)