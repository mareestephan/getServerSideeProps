import Link from 'next/link';
import { withRouter } from 'next/router'


class Product extends React.Component {


    render() {

        // console.log(this.props.products[0].matched_products)
        // console.log('hierdie is in die product page')

        const listItems = this.props.products[0].matched_products.map((product) =>
            < div key={product.product_id} >
                {/* {console.log(this.props.products[0].slug)} */}
                <ul>
                    <li>
                        <Link href={product.product_link} as={product.product_link}  >
                            <a>
                                <div>
                                    <img src={`${product.product_image}`} alt="" />
                                </div>
                                <div>
                                    <p>{product.brand}</p>
                                    <p>{product.product_name}</p>
                                </div>
                                <div>
                                    <div> <p>{product.price}</p></div>
                                    <div> <p>{product.sale_price}</p></div>
                                    <div><p>discounted percentage</p></div>
                                </div>

                            </a>
                        </Link >

                    </li>
                </ul>
            </div >
        );

        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default Product;
