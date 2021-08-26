import { useEffect } from "react";
// import { useStore } from '../../components/state'

export default function GetData() {


    useEffect(
        async () => {
            const res = await fetch('../api/get_data', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.status === 500) {
                console.log(res.text())
            }

            if (res.status === 200) {
                console.log("GET status 200")
                console.log(await res.json())
                // setNameGet((await res.json()))
                // setCallGet(false)
            }
        }, []
    )

    return <></>
}