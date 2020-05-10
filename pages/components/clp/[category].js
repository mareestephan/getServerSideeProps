import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

// export async function getServPaths() {

//     const response = await fetch(
//         'https://my-json-server.typicode.com/mareestephan/jsonProducts/pages_to_create '
//     )
//     const postList = await response.json()

//     return {
//         paths: postList.map(post => {

//             return {
//                 params: {
//                     id: `${post.slug}`,
//                 },
//             }
//         }),
//         fallback: false,
//     }
// }



export async function getServerSideProps({ params }) {



    console.log(params.category)
    const res = await fetch(
        // `https://my-json-server.typicode.com/mareestephan/jsonProducts/pages_to_create?category_id=${params.id} `
        `https://my-json-server.typicode.com/mareestephan/jsonProducts/pages_to_create `
    )

    const posts = await res.json();
    const devReact = posts.filter(obj => obj.slug == "/clp/" + params.category)

    // .map(prop => (prop.matched_products)

    // console.log(devReact)
    console.log("Hierdie is on die eerste map")
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
    // render() {
    //     // console.log(this.props.devReact)
    //     console.log('this.props.devReact')

    //     const polentaKoek = this.props.devReact[0].matched_products.map((product) =>

    //         <div key={product.product_id} >
    //             <ul>
    //                 <li>

    //                     {console.log(product.product_id)}
    //                     {console.log('hieridie is die render map')}

    //                     <p>
    //                         {product.product_id}
    //                     </p>
    //                 </li>
    //             </ul>
    //         </div >

    //     );

    //     return { props: { polentaKoek } }

    // }
}
