import React from 'react'
import s from './Message.module.css';

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={s.message}>
            <div>
                <img src={props.avatar} alt={'avatar'} className={s.img}/>
            </div>
            <div className={s.invertedBorderRadius}>
                <div className={s.nameText}>{props.name}</div>
                <div>
                    <div className={s.messageText}>{props.message}</div>
                    <div className={s.timeText}>{props.time}</div>
                </div>
            </div>

            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <td valign="top">{props.name}</td>*/}
            {/*        <td valign="top">{props.message}</td>*/}
            {/*        <td valign="top">{props.time}</td>*/}
            {/*    </tr>*/}
            {/*</table>*/}
        </div>
    )
}

export default Message
