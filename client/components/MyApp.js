import React from 'react'
import {Page, Button} from '@shopify/polaris'
import Dashboard from './Dashboard'
import About from './About'

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard'
        }
    }

    render() {
        return (
            <Page title={this.state.page === 'dashboard' ? 'dashboard' : 'about'}>
                { this.state.page === 'dashboard' ? <Dashboard gotoAboutPage={() => {
                    console.log('click')
                    this.setState({ page: 'about' })
                }}/> : <About gotoDashboardPage={() => {
                    this.setState({ page: 'dashboard' })
                }}/>}
            </Page>
        )
    }
}