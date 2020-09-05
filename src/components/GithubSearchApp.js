import React from 'react';
// import axios for fetching server data
import Axios from "axios";
// import github authentication for unlimited access
import { clientID , clientSecret } from "./githubCredentials";
// import components
import GithubSearch from "./GithubSearch";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";

class GithubSearchApp extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             profile:{},
             repos:[],
             errorMessage:""
        }
    }
    //child-parent component ineraction
        //getting username from child-coponent(GihubSearch)
    pullUserName=(username)=>{
        this.setState({
            username:username
        })
        this.searchUserProfile(username);
        this.searchUserRepos(username);
    }

    //getting profile data
    searchUserProfile=(username)=>{
        const dataURL=`http://api.github.com/users/${username}?clientId=${clientID}&clientSecret=${clientSecret}`;
    Axios.get(dataURL)
    .then((response)=>{
        this.setState({
            profile:response.data
        });
    })
    .catch((error)=>{
        this.setState({
            errorMessage:error
        });
    })
    };

    //getting repos data
    searchUserRepos=(username)=>{
        const dataURL=`http://api.github.com/users/${username}/repos?clientId=${clientID}&clientSecret=${clientSecret}`;
    Axios.get(dataURL)
    .then((response)=>{
        this.setState({
            repos:response.data
        });
    })
    .catch((error)=>{
        this.setState({
            errorMessage:error
        });
    })
    };

    render() {
        return (
            <React.Fragment>
                 {/*<pre>{JSON.stringify(this.state.repos)}</pre>*/}
                 <div className="container gitapp pb-3">
                    <div className="row">
                        <div className="col">
                            <GithubSearch pushUserName={this.pullUserName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.profile).length !== 0 ?
                                    <React.Fragment>
                                        <GithubProfile profile={this.state.profile}/>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos.length > 0 ?
                                    <React.Fragment>
                                        <GithubRepos repos={this.state.repos}/>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                </div>

                
            </React.Fragment>
        )
    }
}

export default GithubSearchApp

