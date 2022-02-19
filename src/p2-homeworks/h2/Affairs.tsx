import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: Array<AffairType>
    deleteAffairCallback: number
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((m: AffairType) => (
        <Affair // should work
            key={m._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={m.name}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {} // need to fix
    const setHigh = () => {}
    const setMiddle = () => {}
    const setLow = () => {}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
