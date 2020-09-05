import React from "react";


class GithubSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName : ''
        }
    }

    updateInput = (event) => {
        this.setState({
            userName : event.target.value
        });
    };

    //send data to parent-component(GithubSearchApp)
    submitSearch = (event) => {
        event.preventDefault();
        this.props.pushUserName(this.state.userName);
    };

    render() {
        return (
            <React.Fragment>
               {/* <pre>{JSON.stringify(this.state)}</pre>*/}
                <div className="card mt-3 search-bar">
                    <div className="card-header bg-secondary text-white">
                        <div className="row">
                        <p className="h4 title">vardhan1122</p>
                        <p className="h4 float-right">Github-Profile-Search-Portal</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="form-inline" onSubmit={this.submitSearch}>
                            <div className="form-group">
                                <input
                                    value={this.state.userName}
                                    onChange={this.updateInput}
                                    size="60" type="search" className="form-control" placeholder="Github User"/>
                            </div>
                            <div>
                                <input type="submit" value="search" className="btn btn-secondary btn-sm"/>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default GithubSearch;
