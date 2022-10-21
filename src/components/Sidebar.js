import React from 'react'

const Sidebar = () => {
//   let fullname = 'john' ประกาศแบบนี้หากเราไม่ต้องการอัปเดตมันภายหลัง
// ประกาศแบบuseState เมื่อเราต้องการเปลี่ยนค่ามันภายหลัง
  const [fullname, setFullname] = React.useState('john')
  
  const [isShow, setIsShow] = React.useState('true')

  const changeName = () => {

    setFullname('Mary')
    setIsShow(!isShow)

  }


  React.useEffect(() => {
    console.log('sidebar useEffect')
  },)

  React.useEffect(() => {
    console.log('sidebar useEffect one time only')
  },[])

  React.useEffect(() => {
    console.log('sidebar useEffect => ' + fullname )
  },[fullname])



  return (
    <>

    <h3>Sidebar</h3>
    {
        isShow ? <p>Hello </p> : <p>World</p>
    }
    <p>
        สวัสดี {fullname}
    </p>
    <button onClick={changeName}>เปลี่ยนชื่อ</button>
    
    </>
  )
}

export default Sidebar