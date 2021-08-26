import { useEffect } from "react";
import { useStore } from '../../components/date/post/state'

export default function GetDates() {

const id = useStore(state => state.id)
const setDisabled = useStore(state => state.setDisabled)
const disabled = useStore(state => state.disabled)
const setCallDates = useStore(state => state.setCallDates)
const setShow = useStore(state => state.setShow)
const setDisabledDays = useStore(state => state.setDisabledDays)

    useEffect(
        async () => {
            
            const res = await fetch('../api/get_dates/'+id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.status === 500) {
                console.log(res.text())
            }

            if (res.status === 200) {
                setCallDates(false)
                setShow('block')
                console.log("GET status 200")
                setDisabled(await res.json())
                // console.log(await res.json())
                // console.log( [...disabled[0]] )
                // console.log('Year:'+[...disabled[0]][0])
                // setDisabledDays()
                // console.log('Month:'+[...disabled[0]][1].toString()+[...disabled[0]][2].toString())
                // console.log('Day:'+[...disabled[0]][3].toString()+[...disabled[0]][4].toString())
                
            }
        }, []
    )

    return <></>
}