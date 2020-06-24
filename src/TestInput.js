import React from 'react';
import './TestInput.css';

class TestInpyt extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            textareaValue:'',
            bigTextareaValue:'',
            checkboxValue: false
        }
    }

    onInputHandler = (e) => {
        this.setState({
            inputValue:e.currentTarget.value
        })
    }

    onTextareaHandler = (e) => {
        this.setState({
            textareaValue:e.currentTarget.value
        })
    }

    onBigTextareaHandler=(e)=>{
        this.setState({
            bigTextareaValue:e.currentTarget.value
        })
    }

    onChangeCheckbox = (e) => {
        this.setState({
            checkboxValue:e.currentTarget.checked
        })
    }

    onBtnHandler = (e) => {
        e.preventDefault();
        const{inputValue, textareaValue, bigTextareaValue} = this.state;
        const { onAddNews } = this.props;

        if (onAddNews) {
            onAddNews({
                id: +new Date(), 
                author: inputValue, 
                text:textareaValue,
                bigText:bigTextareaValue,
            });
        }

        this.setState({
            inputValue:'',
            textareaValue:'',
            checkboxValue: false,
            bigTextareaValue:'',
        })
    }

    validate = () => {
        const { inputValue, textareaValue, checkboxValue } = this.state;
        if (inputValue.trim() && textareaValue.trim() && checkboxValue) {
        return true;
        }
        return false;
    }

    render(){
        const{inputValue, textareaValue, checkboxValue, bigTextareaValue} = this.state; 
        return(
           <form className='add'>
               <input
                    type='text'
                    className='add__author'
                    placeholder='Ваше имя'
                    onChange={this.onInputHandler}
                    value={inputValue}
               />
                <textarea
                    type='text'
                    className="add__text"
                    placeholder='Заголовок'
                    onChange={this.onTextareaHandler}
                    value={textareaValue}
               />
                <textarea
                    type='text'
                    className="add__text"
                    placeholder='Текст новости'
                    onChange={this.onBigTextareaHandler}
                    value={bigTextareaValue}
               />
                <label className="add__checkrule">
                    <input type='checkbox' onChange={this.onChangeCheckbox} checked={checkboxValue}/>Я согласен с правилами данного сообщества
                </label>
                <button
                    className="add__btn"
                    onClick={this.onBtnHandler}
                    disabled={!this.validate()}
                >
                    Добавить новую запись
                </button>  
           </form>
        )
    }
}
export default TestInpyt;