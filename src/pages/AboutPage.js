import React from 'react'
import axios from 'axios'

const AboutPage = () => {
  const [version, setVersion] = React.useState('')

  const getData= async () => {
      const resp = await axios.get('https://api.codingthailand.com/api/version')

      setVersion(resp.data.data.version)
      // console.log(resp.data.data.version)
    }

  React.useEffect(() => {
    
    // async function getData() {
    //   const resp = await axios.get('https://api.codingthailand.com/api/version')

    //   setVersion(resp.data.data.version)
    //   // console.log(resp.data.data.version)
    // }

    getData()
  },[])

  return (
    <div className='container'>
        <div className='rpw'>
            <div className='col-md-12'>
            <h2>เกี่ยวกับเรา</h2>
            <p>
            Backend API เวอร์ชั่น: {version}
            </p>

            </div>
        </div>

    </div>
  )
}

export default AboutPage