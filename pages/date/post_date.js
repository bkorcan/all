import Style from '../../styles/date.module.css'
import { useStore } from '../../components/date/state'
import { useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import Post from './post';




export default function FormDate() {

    const nodeId = useRef();
    const nodeDate = useRef();

    const setId = useStore(state => state.setId)
    const setDate = useStore(state => state.setDate)
    const call = useStore(state => state.call)
    const setCall = useStore(state => state.setCall)
    const errorText = useStore(state => state.errorText)
    const setErrorText = useStore(state => state.setErrorText)
    const show = useStore(state => state.show)
    const setShow = useStore(state => state.setShow)



    const handleDayClick = (day) => {

        nodeDate.current.value = day.toLocaleDateString()

        setDate(
            day.getFullYear().toString().substr(-1) + ('0' + (day.getMonth() + 1)).slice(-2) + ('0' + day.getDate()).slice(-2)
        )
    }

    const handleSubmit = () => {
        setShow('none')
        setErrorText('')

        setId(nodeId.current.value)
        
        setCall(true)

    }

    function ErrorCall() {
        return <div style={{ color: 'red', marginTop: 20 }}>{errorText}</div>
    }

    return (
        <div className={Style.container} >

            <input ref={nodeId} className={Style.input} size='5' type='number' placeholder='Villa id' />

            <input ref={nodeDate} className={Style.input} size='8' placeholder='date' />

            <h3 className={Style.h3} >Select date</h3>
            <DayPicker mode="single" onDayClick={handleDayClick} className={Style.date}
                style={{ display: show }}
            />

            <button type='submit' onClick={handleSubmit} className={Style.submit} >Post Date</button>

            {
                call ? <Post /> : <ErrorCall />
            }

        </div>

    )
}