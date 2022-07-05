import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
    return (
        <Card className="logs-form">
            <form>
                <div className='form-item'>
                <label htmlFor='date'>date</label>
                <input id="date" type="date"/>
                </div>
                <div className='form-item'>
                <label htmlFor='desc'>discription</label>
                <input id="desc" type="text"/>
                </div>
                 <div className='form-item'>
                <label htmlFor='time'>time</label>
                <input id="time" type="number"/>
                </div>
                <div className='form-btn'>
                    <button>add item</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;