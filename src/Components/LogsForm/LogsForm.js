import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {

    let inputDate ='';
    let inputDesc ='';
    let inputTime ='';
    
    const dateChangeHandler = (e)=> {
        // console.loge(e.target.value);
        inputDate = e.target.value;
     };
    
    const descChangeHandler = (e)=> {
    //    console.log(e.target.value);
    inputDesc = e.target.value;
    };

    const timeChangeHandler = (e)=> {
        // console.log(e.target.value);
        inputTime = e.target.value;
     };

     const formSubmitHandler = (e) => {
         e.preventDefault();
        //  console.log('form has been submited');
         
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }; 

        console.log(newLog);
     };

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className='form-item'>
                <label htmlFor='date'>date</label>
                <input onChange={dateChangeHandler} id="date" type="date"/>
                </div>
                <div className='form-item'>
                <label htmlFor='desc'>discription</label>
                <input onChange={descChangeHandler} id="desc" type="text"/>
                </div>
                 <div className='form-item'>
                <label htmlFor='time'>time</label>
                <input onChange={timeChangeHandler} id="time" type="number"/>
                </div>
                <div className='form-btn'>
                    <button>add item</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;