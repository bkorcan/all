import Style from '../../styles/date.module.css'
import { useStore } from '../../components/date/post/state'
import { useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import Post from './post';
import GetDates from './get_dates';
import DeleteDate from './delete_date'

const bookedStyle = { border: '1px solid red' };


export default function FormDate() {

    let arrayDisabled = []
    let checkDisabled = []
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
    const callDates = useStore(state => state.callDates)
    const setCallDates = useStore(state => state.setCallDates)
    const disabled = useStore(state => state.disabled)
    const date = useStore(state => state.date)
    const callDelete = useStore(state => state.callDelete)
    const setCallDelete = useStore(state => state.setCallDelete)
    const setDateId = useStore(state => state.setDateId)



    const handleDayClick = (day) => {
        //   console.log(day.toLocaleDateString())
        // nodeDate.current.value = day.toLocaleDateString()
       let dateCurrent = day.getFullYear().toString().substr(-1) + ('0' + (day.getMonth() + 1)).slice(-2) + ('0' + day.getDate()).slice(-2)
        setDate(
            dateCurrent
        )
     
        checkDisabled = disabled.filter(d => d === dateCurrent)


        if (checkDisabled.length) {
            setShow('none')
            setErrorText('')
            setDateId(nodeId.current.value + dateCurrent)
            console.log(nodeId.current.value + dateCurrent)
            setCallDelete(true)

        }
        else {
            console.log(checkDisabled);
            setShow('none')
            setErrorText('')
            setId(nodeId.current.value)
            setCall(true)
        }
    }

    const handleSubmit = () => {


        if (checkDisabled.length) {
            setShow('none')
            setErrorText('')
            setDateId(nodeId.current.value + date)
            console.log(nodeId.current.value + date)
            setCallDelete(true)

        }
        else {
            console.log(checkDisabled);
            setShow('none')
            setErrorText('')
            setId(nodeId.current.value)
            setCall(true)
        }
    }

    if (disabled.length !== 0) {
        // console.log(disabled)
        disabled.map((e) =>
            arrayDisabled.push(new Date('202' + [...e[0]].toString(), (([...e][1] + [...e][2]) - 1).toString(), [...e][3].toString() + [...e][4].toString()
            )
            )
        )
    }
    function ErrorCall() {
        return <div style={{ color: 'red', marginTop: 20 }}>{errorText}</div>
    }
    const handleInput = () => {
        if (nodeId.current.value.length === 3) {
            setShow('none')
            setId(nodeId.current.value)
            setCallDates(true)

        }

    }

    return (
        <div className={Style.container} >

            <input ref={nodeId} className={Style.input} size='5' type='number' placeholder='Villa id' onChange={handleInput} />

            {/* <input ref={nodeDate} className={Style.input} size='8' placeholder='date' /> */}

            <h3 className={Style.h3} >Select date</h3>

            <DayPicker mode="single" onDayClick={handleDayClick} className={Style.date}
                style={{ display: show }}
                // disabled={arrayDisabled}
                modifiers={{
                    booked: arrayDisabled
                }}
                modifierStyles={{
                    booked: bookedStyle
                }}

            />

            {/* <button type='submit' onClick={handleSubmit} className={Style.submit} >Post Date</button> */}

            {
                call ? <Post /> : <ErrorCall />

            }
            {
                callDelete ? <DeleteDate /> : <ErrorCall />

            }
            {
                callDates ? <GetDates /> : <></>
            }

        </div>

    )
}