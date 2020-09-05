import React from "react";

class GithubProfileDetails extends React.Component{
  constructor(props) {
      super(props)
  
      this.state = {
           
      }
  }
  
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header prifile-card">
                        <span className="badge badge-primary mx-1">Followers : {this.props.profileDetails.followers}</span>
                        <span className="badge badge-secondary mx-1">Repos : {this.props.profileDetails.public_repos}</span>
                        <span className="badge badge-success mx-1">Gists : {this.props.profileDetails.public_gists}</span>
                        <span className="badge badge-info mx-1">Following : {this.props.profileDetails.following}</span>
                    </div>
                    <div className="card-body proDet1-data">
                        <ul className="list-group">
                            <li className="list-group-item proDet-data">
                                Profile URL : <a href={this.props.profileDetails.html_url} target="_blank"><b>{this.props.profileDetails.html_url}</b></a>
                            </li>
                            <li className="list-group-item proDet-data">
                                Email : {this.props.profileDetails.email}
                            </li>
                            <li className="list-group-item proDet-data">
                                Company : <a href={this.props.profileDetails.company} target="_blank">{this.props.profileDetails.company}</a>
                            </li>
                            <li className="list-group-item proDet-data">
                                Blog : <a href={this.props.profileDetails.blog} target="_blank">{this.props.profileDetails.blog}</a>
                            </li>
                            <li className="list-group-item proDet-data">
                                Member Since : {this.props.profileDetails.created_at}
                            </li>
                            <li className="list-group-item proDet-data">
                                Location : {this.props.profileDetails.location}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default GithubProfileDetails;
