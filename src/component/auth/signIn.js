import React, { Component } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'

export class signIn extends Component {
    render() {
        return (
            <div>
                <h1>Signed in</h1>
                
            </div>
        )
    }
}

export default withAuthenticator(signIn)
