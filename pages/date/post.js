import { useEffect } from "react";
import { useStore } from '../../components/date/post/state'

export default function Post() {

  const id = useStore(state => state.id)
  const date = useStore(state => state.date)
  const setShow = useStore(state => state.setShow)
  const setCall = useStore(state => state.setCall)
  const setErrorText = useStore(state => state.setErrorText)
  const setCallDates = useStore(state => state.setCallDates)


  useEffect(
    async () => {
      setCall(false)

      const res = await fetch('/api/post_date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ villaId: id, date: date}),
      });

      if (res.status === 500) {
        setShow('block')
        setErrorText(JSON.stringify(await res.text()))
      }

      if (res.status === 200) {
        // setShow('block')
        setCallDates(true)
        console.log('status 200')
      }
    }, []
  )
  return <span></span>
}
