import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const chAll = s.button + ' ' + (props.filter === 'all' ? s.active : '')
    const chHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '')
    const chMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '')
    const chLow = s.button + ' ' + (props.filter === 'low' ? s.active : '')
    return (
        <div style={s}>

            {mappedAffairs}

            <button onClick={setAll} className={chAll}>All</button>
            <button onClick={setHigh} className={chHigh}>High</button>
            <button onClick={setMiddle} className={chMiddle}>Middle</button>
            <button onClick={setLow} className={chLow}>Low</button>
        </div>
    )
}

export default Affairs
