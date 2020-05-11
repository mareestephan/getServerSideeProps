import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'


export async function getServerSideProps({ params }) {

    const res = await fetch(
        `https://my-json-server.typicode.com/mareestephan/jsonProducts/pages_to_create `
    )

    const posts = await res.json();
    const devReact = posts.filter(obj => obj.slug == "/clp/" + params.category)

    return (
        {
            props:
                { devReact }
        }
    )
}

export default class extends Component {

    render() {
        return (
            <div >
                {this.props.devReact[0].matched_products.map((product) => (
                    <div key={product.product_id}>
                        <p>
                            {product.product_id}
                        </p>
                    </div>

                ))}
            </div>
        );
    }

}
