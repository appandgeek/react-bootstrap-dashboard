import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Profile from '../account/userprofile';
import Menu from '../sidebar/menu';
import Signup from '../account/signup';
import Signin from '../account/signin';
import Recoverpassword from '../account/recoverpassword';
import Tables from '../tables/tables';
import Notfound from '../account/404';
import Servererror from '../account/500';
import Forms from '../account/forms';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Maincontent extends Component {


    render() {
        const currentPath = window.location.pathname;

        return (
            <main className="u-main" role="main">
                {currentPath.includes('signup') ? null : currentPath.includes('signin') ? null : currentPath.includes('404') ? null : currentPath.includes('500') ? null : currentPath.includes('recover-password') ? null :
                    <aside className={this.props.toggleSidebar ? "u-sidebar toggled action mini" : "u-sidebar"} >
                        <div className='u-sidebar-inner'>
                            <nav className="u-sidebar-nav">
                                <Menu />

                            </nav>
                        </div>
                    </aside>
                }
                <div className='u-content'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/dashboard' component={Home} />
                        <Route path='/forms' component={Forms} />
                        <Route exact path='/profile' component={Profile} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/recover-password' component={Recoverpassword} />
                        <Route path='/tables' component={Tables} />

                        <Route path='/500' component={Servererror} />
                        <Route path='/404' component={Notfound} />
                    </Switch>

                </div>


            </main >

        );
    }
}

const mapStateToProps = state => {

    return {
        toggleSidebar: state.toggleSidebar,
        hasSub: state.hasSub
    };
};



export default withRouter(connect(
    mapStateToProps,
    null
)(Maincontent));