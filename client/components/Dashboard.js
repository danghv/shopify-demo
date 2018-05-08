import React, { Component } from 'react';
import { Layout, Button, Card } from '@shopify/polaris'
import axios from 'axios'

// console.log('access token...', window.accessToken)
// axios.create({
//   baseURL: 'https://test-helloworld.myshopify.com',
//   timeout: 1000,
//   headers: {'X-Shopify-Access-Token': window.accessToken}
// })

// const URL = `${window.shopOrigin}/admin/shop.json`
// const shopRequestHeaders = {
//     'X-Shopify-Access-Token': window.accessToken,
// }

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: {}
        }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts/1')
        axios.get('/api/shoppp')
            .then(result => {
                // console.log('result ...', result.data.shop)
                this.setState({ shop: result.data.shop})
            })
    }

    renderShopContent(shop) {
      console.log('shop...', shop)
        return (
          <div>
            <p>Id: {shop.id}</p>
            <p>Name: {shop.name}</p>
            <p>Email: {shop.email}</p>
            <p>Domain: {shop.domain}</p>
          </div>
        )
    }

    render() {
        const { apiKey, shopOrigin, accessToken } = window
        return (
            <Layout sectioned>
                <div>This is dashboard page</div>
                <Button
                    primary
                    onClick={ () => {
                        this.props.gotoAboutPage()
                    }}
                >go to about page</Button>
                <Card title="Online store dashboard" sectioned>
                    <p>View a summary of your online store’s performance.</p>
                    {this.renderShopContent(this.state.shop)}
                </Card>
            </Layout>
        );
    }
}