import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component{
  state = {
    options: []
  }

  componentDidMount() {
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}));
      }
    } catch (e){
      //Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.length !== this.state.options.length){
     const json = JSON.stringify(this.state.options);
     localStorage.setItem('options', json);
     console.log('saving data')
    }
  }

  handlePick = () => {
    let pick = this.state.options[Math.floor(Math.random() * this.state.options.length)];
    alert(pick);
  }
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }
  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add item';
    }else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }
  
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0} 
        handlePick={this.handlePick}
        />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
        handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}