import Description from '@components/Description'
import Dribbble from '@components/Dribbble'
import Hero from '@components/Hero'
import Layout from '@components/Layout'

export default function Home({data}) {
  return (
   <Layout>
     <Hero />
     <Description />
     <Dribbble data={data}/>
    
   </Layout>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.API_KEY}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}




