import React from "react";

class GithubProfileCard extends React.Component{
   constructor(props) {
       super(props)
   
       this.state = {
            
       }
   }
   

    render() {
        return (
            <React.Fragment>
                <div className="card ProCard-data">
                    <div className="profile-login">
                        <p className="h4 text-center">{this.props.profileCard.login}</p>
                    </div>
                   
                    <img src={this.props.profileCard.avatar_url} alt="" className="img-fluid p-2"/>
                    <div className="card-body">
                        <p className="h5 my-name">{this.props.profileCard.name}</p>
                        <p className="h5 text-center pb-md-2 profile-bio">{this.props.profileCard.bio}</p>
                    </div>
                    <div className="text-center">
                        <a size="80" href={this.props.profileCard.html_url} className="btn btn-dark btn-sm profile-btn" target="_blank">Profile View</a>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default GithubProfileCard;
