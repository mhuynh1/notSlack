import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { auth, googleProvider, githubProvider } from './base'
class SignIn extends Component {
    state = {
        email: ""
    }

    authenticate = (provider) => {
        auth.signInWithPopup(provider)
        .catch(err => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(this.state.email, 'goauth')
            .catch(() => {
                    auth.signInWithEmailAndPassword(this.state.email, 'goauth')
            })
    }

    render() {
        return (
            <div className={`SignIn ${css(styles.signIn)}`}>
                <header className={css(styles.header)}>
                    <span className={css(styles.title)}>
                        <i className="fas fa-hashtag"></i>babble
                    </span>
                </header>
                <main className={css(styles.main)}>
                    <form
                        className={css(styles.form)}
                    >
                        <h2 className={css(styles.h4)}>Sign In</h2>
                        <label
                            htmlFor="email"
                            className={css(styles.label)}
                        >
                        </label>
                        <input type="email"
                            autoFocus
                            name="email"
                            value={this.state.email}
                            className={css(styles.input)}
                            onChange={this.handleChange}
                            placeholder="what's your email?"
                        />
                        <label
                            htmlFor="email"
                            className={css(styles.label)}
                        >
                        </label>
                        
                        <button
                            type="button"
                            onClick={this.handleSubmit}
                            className={css(styles.button)}
                        >
                            go!
                        </button>
                        <h4>or</h4>
                        <div className={css(styles.buttonGroup)}>
                            <button
                                type="button"
                                onClick={() => this.authenticate(githubProvider)}
                                className={css(styles.button, styles.github)}
                            >
                                <i className={`fab fa-github ${css(styles.brandIcon)}`}></i>
                                Sign in with Github
                            </button>
                            <button
                                type="button"
                                onClick={() => this.authenticate(googleProvider)}
                                className={css(styles.button, styles.google)}
                            >
                                <i className={`fab fa-google ${css(styles.brandIcon)}`}></i>
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                    <div className="blurb">
                        <h2 className={css(styles.h2)}>You're in good company.</h2>
                        <p className={css(styles.p)}>Chat with babble</p>
                    </div>
                </main>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    signIn: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f6f6f6',
    },
    header: {
        backgroundColor: '#fff',
        height: '4rem',
        padding: '0 2rem',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    },
    title: {
        color: '#ff3344',
        fontWeight: 400,
        textTransform: 'uppercase',
        lineHeight: '80px',
        fontSize: '2rem',
    },
    main: {
        width: '100%',
        flex: 1,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        paddingBottom: '3rem',
    },

    form: {
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        boxShadow: '0 1px 1px rgba(0,0,0,.1)',
        margin: 'auto',
        paddingBottom: '2rem',
    },
    label: {
        display: 'block',
        textTransform: 'uppercase',
        color: '#999',
    },
    input: {
        width: '20rem',
        fontSize: '1.5rem',
        border: 0,
        borderBottom: '1px solid black',
        marginTop: '1rem',
        marginBottom: '1rem',
        textAlign: 'center',
        padding: '0.5rem 0',
        ':focus': {
            outline: 0,
        },
    },
    h2: {
        fontWeight: 'normal',
    },
    h4:{
        margin: '.5rem 0'
    },
    button: {
        display: 'block',
        margin: '0 auto 1rem',
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        borderRadius: '1rem',
        backgroundColor: '#3ac753',
        color: 'white',
        width: '20rem',
    },
    google: {
        backgroundColor: '#ff3333',
    },
    github: {
        backgroundColor: '#6e5494',
    },
    brandIcon: {
        marginRight: '1rem',
    },
    buttonGroup: {
        marginTop: '1rem',
    },
    error: {
        color: '#ff3333',
        height: '1.2rem',
    },
})
export default SignIn;