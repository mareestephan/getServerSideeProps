import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Product from '../product'


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

                <Product products={this.props.devReact} />

            </div>
        );
    }

}
