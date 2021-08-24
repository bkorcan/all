import { useStore } from '../../components/villa/state'
import { useRef } from 'react';
import Post from './post';
import Style from '../../styles/post.module.css'


export default function PostVilla() {

  const node1 = useRef()
  const node2 = useRef()
  const node3 = useRef()

  
  const show = useStore(state => state.show)
  const call = useStore(state => state.call)
  const errorText = useStore(state => state.errorText)
  

  const setId = useStore(state => state.setId)
  const setName = useStore(state => state.setName)
  const setPrice = useStore(state => state.setPrice)
  const setShow = useStore(state => state.setShow)
  const setCall = useStore(state => state.setCall)
  const setErrorText = useStore(state => state.setErrorText)

  const handleClick =  () => {
    setShow('none')
    setErrorText('')

    setId(node1.current.value)
    setName(node2.current.value)
    setPrice(node3.current.value)

    setCall(true)
  }

  function ErrorCall(){
    return <div style={{color:'red', marginTop:20}}>{errorText}</div>
  }

  return (

    <div className={Style.container} >
      <h3>Create Villa</h3>
      <input ref={node1} type='number' size='6'  placeholder='Villa Id' className={Style.input} />
      
      <input ref={node2} type='text' size='6' className={Style.input} placeholder='Villa Name' />
      
      <input ref={node3} type='number' size='6' className={Style.input} placeholder='Price' />

      <button style={{ display: show }} onClick={handleClick}  className={Style.submit} >Create</button>
      {
        call ? <Post/> : <ErrorCall/>
      }
    </div>

  )
}