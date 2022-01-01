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
  const res = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=06735c05a7aaf78429098451adb7585f6e7b7a99e6414b2382b418574ef27000`)
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




