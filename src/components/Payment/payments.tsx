import React, {useRef, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
/*import {IPayment} from "../../Interfaces/IPayment";*/
import { Tooltip, Overlay, FormCheck } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form';


const Payment : React.FC = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div>
            <form name='editForm'>

                    <div key={`default-radio`} className="mb-3">
                        Сумма
                        <FormCheck
                            type={'radio'}
                            id={'month'}
                            label={'Оклад за месяц'}
                        />
                    <span>   <FormCheck
                            type={'radio'}
                            id={'mrot'}
                            label={'МРОТ'}
                        /> <span ref={target} onClick={() => setShow(!show)}>
                        i
                    </span> </span>
                        <FormCheck
                            type={'radio'}
                            id={'day'}
                            label={'Оплата за день'}
                        />
                        <FormCheck
                            type={'radio'}
                            id={'hour'}
                            label={'Оплата за час'}
                        />
                    </div>

            <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (<Tooltip id="overlay-example" {...props}>
                        МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
                    </Tooltip>
                )}
            </Overlay>
Указать с НДФЛ <FormCheck
                type={'radio'}
                id={'hour'}
                label={'Без НДФЛ'}
            />
                <div>
                    <Field name="firstName" component="input" type="text"/><span>P</span>
                </div>
            </form>
            <div>Сотрудник будет получать на руки</div>
            <div>НДФЛ, 13% от оклада</div>
            <div>Р за сотрудника в месяц</div>
        </div>

    )
}
export default (reduxForm({
    form: 'editForm'
})(Payment));

