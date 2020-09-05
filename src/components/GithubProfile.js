import React from "react";
//import components
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

class GithubProfile extends React.Component{
  constructor(props) {
      super(props)
  
      this.state = {
           
      }
  }
  

    render() {
        return (
            <React.Fragment>
                <div className="row mt-3">
                    <div className="col-md-3">
                        {
                            Object.keys(this.props.profile).length !== 0 ?
                                <React.Fragment>
                                    <GithubProfileCard profileCard={this.props.profile}/>
                                </React.Fragment> : null
                        }
                    </div>
                    <div className="col-md-9">
                        {
                            Object.keys(this.props.profile).length !== 0 ?
                                <React.Fragment>
                                    <GithubProfileDetails profileDetails={this.props.profile}/>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default GithubProfile;
