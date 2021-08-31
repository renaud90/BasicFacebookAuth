import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked = () => console.log('clicked');

    responseFacebook = (response) => {
        this.setState({
            isLoggedIn : true,
            userId : response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    render(){
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div style = {{
                    width:'400px',
                    margin:'auto',
                    background: 'black',
                    padding:'20px'
                }}>
                    <img src = {this.state.picture} alt={this.state.name}/>
                    <h3>Bienvenue {this.state.name}</h3>
                    Email: {this.state.email}
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
                appId="364636668554227"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
                language = 'fr_CAN'
                />);
        }
        return(
            <div>
                {fbContent}
            </div>
        )
    }
}