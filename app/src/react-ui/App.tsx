import React, {FunctionComponent, ReactElement} from 'react';
import style from './assets/App.module.scss';
import {FormattedTime, IntlProvider} from "react-intl";
import {useMessageGenerator} from "./hooks/useMessageGenerator";

function App() {
    const {message, time} = useMessageGenerator();
    return (
        <IntlProvider locale="en">
            <div className={style.outer}>
                <div className={style.time}>
                    <HHMMSSFormattedTime time={time}/>
                </div>
                <div className={style.inner}>
                    <div className={style.message}>
                        <Message value={message}/>
                    </div>
                </div>
            </div>
        </IntlProvider>
    );
}

export default App;

const Message: FunctionComponent<{ value: string }> = ({value}): ReactElement => {
    return <p>{value}</p>;
};

const HHMMSSFormattedTime: FunctionComponent<{ time: Date }> = ({time}): ReactElement => {
    return <FormattedTime value={time} hour="numeric" minute="numeric" second="numeric"/>;
};








