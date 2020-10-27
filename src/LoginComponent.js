import React from 'react';
import UserLists from './UserLists';
export default class LoginComponent extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', msg: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        //this.function(response)= this.function(response).bind(this);
      }
    
      handleChange(event) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        var url = process.env.REACT_APP_API_HOST+ 'api-token-auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username, password: this.state.password },)
        };
        fetch(url, requestOptions)
        .then((response) => {
          if(response.ok) {
            response.json().then((data)=>{
              localStorage.setItem('token', data.token);
                this.setState({token: data.token});
              })
          } else {
            console.log('Network response was not ok.');
            this.setState({msg: 'Ocorreu um erro, tente novamente!'});
            this.setState({password: ''});
            this.setState({username: ''});
          }

        })
        
         
        event.preventDefault();
      }
      
      logout(){
          localStorage.removeItem('token');
          this.setState({token: null});
          this.setState({msg: ''});
          this.setState({password: ''});
          this.setState({username: ''});
      }
      render() {
        var token = localStorage.getItem('token');
        //var msg = localStorage.getItem('msg');
        if (!token){
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Nome:
              <input type="text" value={this.state.username} onChange={this.handleChange} />
              Senha:
              <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
            </label>
            <div>{this.state.msg}</div>
            <input type="submit" value="Enviar" />
          </form>
          

        )}
        else
            return (
            <div>
                    <UserLists />
                    <button onClick ={() => this.logout()}> Logout</button>

                </div>
            )
      }

}