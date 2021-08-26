import { useStore } from './date/post/state'


const DisabledDates = ()=>{
const disabled = useStore(state => state.disabled)
console.log( disabled )
return <>{disabled}</>

}


export   {DisabledDates};