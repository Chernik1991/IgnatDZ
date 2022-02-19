import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    deleteAffairCallback: ()=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }// need to fix

    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>{props.affair}</button>
        </div>
    )
}

export default Affair
