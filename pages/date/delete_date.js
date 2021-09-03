import { useEffect } from "react";
import { useStore } from '../../components/date/post/state'

export default function DeleteDate() {

  const dateId = useStore(state => state.dateId)
  const setShow = useStore(state => state.setShow)
  const setErrorText = useStore(state => state.setErrorText)
  const setCallDates = useStore(state => state.setCallDates)
  const callDelete = useStore(state => state.callDelete)
  const setCallDelete = useStore(state => state.setCallDelete)


 console.log('I am in call delete')
  useEffect(
    async () => {
      setCallDelete(false)

      const res = await fetch('/api/delete_date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: dateId }),
      });
     console.log(res.status)
      if (res.status === 500) {
        setShow('block')
        setErrorText(JSON.stringify(await res.text()))
      }

      if (res.status === 200) {
        setShow('block')
        setCallDates(true)
        console.log('Delete status 200')
      }
    }, []
  )
  return <span></span>
}
