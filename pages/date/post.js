import { useEffect } from "react";
import { useStore } from '../../components/date/state'

export default function Post() {

  const id = useStore(state => state.id)
  const date = useStore(state => state.date)
  const setShow = useStore(state => state.setShow)
  const setCall = useStore(state => state.setCall)
  const setErrorText = useStore(state => state.setErrorText)


  useEffect(
    async () => {
      setCall(false)

      const res = await fetch('/api/create_date', {
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
        setShow('block')
        console.log('status 200')
      }
    }, []
  )
  return <span></span>
}
