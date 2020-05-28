import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '544043580697-kegoee4jlm3qckil9god2s8jq0fdauu2.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }

    render() {
        return (
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth;