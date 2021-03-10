import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Background from '../../assets/images/backgrounds/login-bg.jpg'
import { connect } from 'react-redux'
import { LoginUser } from '../../redux/actions/account/user_actions'
import LinearLoading from '../../components/common/linearLoading'
import { messages } from '../../translation/messages'
import { injectIntl } from "react-intl"

const useStyles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        height: 50,
        margin: theme.spacing(3, 0, 2),
        fontSize: 16,
        textTransform: 'inherit'
    },
    logo: {
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 50
    }
});

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            rememberMe: false,
            validation: {
                valid: false,
                userNameAreaError: false,
                userNameErrorText: "",
                passwordAreaError: false,
                passwordErrorText: "",
            }
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRememberMe = this.handleRememberMe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleUserNameChange(e) {
        this.setState({ userName: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    validateForm() {
        const { intl } = this.props;
        let validation = { valid: false, userNameAreaError: false, userNameErrorText: "", passwordAreaError: false, passwordErrorText: "", };
        if (!this.state.userName) {
            validation.userNameAreaError = true;
            validation.userNameErrorText = intl.formatMessage(messages.USERNAME_CAN_NOT_BE_BLANK);
        }
        else {
            validation.userNameAreaError = false;
            validation.userNameErrorText = "";
        }

        if (!this.state.password) {
            validation.passwordAreaError = true;
            validation.passwordErrorText = intl.formatMessage(messages.PASSWORD_CAN_NOT_BE_BLANK);
        }
        else {
            validation.passwordAreaError = false;
            validation.passwordErrorText = "";
        }

        if (this.state.userName && this.state.password) {
            validation.valid = true;
        }

        this.setState({ validation: { ...validation } });
        return validation.valid;
    }
    onSubmit(e) {
        e.preventDefault();

        if (this.validateForm()) {
            this.props.onLoginUser(this.state.userName, this.state.password);
        }
    }
    handleRememberMe(e) {
        this.setState({ rememberMe: e.target.checked });
    }
    render() {
        const { classes, intl } = this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={8} className={classes.image} />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    {this.props.loading ? <LinearLoading /> : null}
                    <div className={classes.paper}>
                        <div className={classes.logo}>
                            <img src={process.env.PUBLIC_URL + intl.formatMessage(messages.LOGO)} alt="TGA-SSO" height={140} style={{ maxWidth: '100%' }} />
                        </div>
                        <div className="login_header_text">
                            <h2>{intl.formatMessage(messages.LOGIN_TEXT)}</h2>
                        </div>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={this.onSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                disabled={this.props.disabled}
                                required
                                fullWidth
                                error={this.state.validation.userNameAreaError}
                                helperText={this.state.validation.userNameErrorText}
                                id="user-name"
                                label={intl.formatMessage(messages.USER_NAME)}
                                name="user-name"
                                autoComplete="off"
                                autoFocus
                                value={this.state.userName}
                                onChange={this.handleUserNameChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                disabled={this.props.disabled}
                                required
                                fullWidth
                                error={this.state.validation.passwordAreaError}
                                helperText={this.state.validation.passwordErrorText}
                                name="password"
                                label={intl.formatMessage(messages.PASSWORD)}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                            <div className="information_text_area">
                                <p>{intl.formatMessage(messages.LOGIN_WARNING_TEXT_1)}</p>
                                <p>{intl.formatMessage(messages.LOGIN_WARNING_TEXT_2)}</p>
                            </div>
                            <Button
                                disabled={this.props.disabled}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                {intl.formatMessage(messages.LOGIN)}
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.viewReducer.loader.showLoader,
        disabled: state.viewReducer.loader.disabled
    };
}

const mapDispatchToProps = {
    onLoginUser: LoginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(injectIntl(SignIn)));