import React from "react";

class GithubRepos extends React.Component{
constructor(props) {
    super(props)

    this.state = {
         
    }
}

    render() {
        return (
            <React.Fragment>
               <div className="card mt-3 md-3">
                   <div className="card-header bg-secondary text-white">
                       <p className="h4">Your Repositories</p>
                   </div>
                   {/* <div className="card-body">
                       <ul className="list-group"> */}
                           {
                               this.props.repos.map((repo) => {
                                   return(
                                    //    <li className="list-group-item d-flex justify-content-around" key={repo.html_url}>
                                    //         <p className="h5">
                                    //             <a href={repo.html_url} target="_blank">{repo.name}</a>
                                    //         </p>
                                    //        <span className="badge badge-success">{repo.stargazers_count} Stars</span>
                                    //        <span className="badge badge-primary">{repo.watchers_count} Watches</span>
                                    //    </li>
                                    <div className="card-body repos1-data" key={repo.html_url}>
                                    <div className="row repos-data">
                                    <div className="col-md-6">
                                    <div className="repo-text">
                                    <strong className="repos-text-size" >{repo.name}</strong> : {repo.description}
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <span className="badge badge-danger">Forks: {repo.forks_count}</span>
                                    <span className="badge badge-warning">Watchers: {repo.watchers_count}</span>
                                    <span className="badge badge-dark">Stars: {repo.stargazers_count}</span>
                                    </div>
                                    <div className="col-md-2">
                                    <a href={repo.html_url} target="_blank" className="btn btn-info repo-bg"><span className="repo-span">Visit Repo</span></a>
                                    </div>
                                    </div>
                                    </div>
                                   )
                               })
                           }
                       {/* </ul>
                   </div> */}
               </div>
            </React.Fragment>
        );
    }
}
export default GithubRepos;
