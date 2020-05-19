import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
    return (
        <section className='landing'>
        <div className='dark-overlay'>
            <div className='landing-inner'>
                <h1 className='x-large'>iiSho</h1>
                <p className='lead'>
                It can be tough to stay motivated, and feel on top of things in coding. That's what community is for! Create account, meet new friends, coders and potential colleagues at iiSho. 
                </p>
                <p className='lead'>
                  Develop, Together.
                </p>
             <div className='buttons'>
              <Link to='/register' className='btn btn-light'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
      </div>
    </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);