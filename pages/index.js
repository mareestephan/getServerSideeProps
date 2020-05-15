import Layout from './components/layout'
import Categories from './categories'
import Fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = (props) => (

  <Layout>
    <div>
      <Categories categories={props.data} />

    </div>
  </Layout>
);

export async function getServerSideProps() {

  // const res = await fetch('https://my-json-server.typicode.com/mareestephan/jsonProducts/pages_to_create');
  const res = await fetch('http://www.json-generator.com/api/json/get/ckeElWByRe?indent=2');
  const data = await res.json();

  return (
    {
      props:
        { data }
    }
  )

}

export default Index