import React, { Component } from 'react';
import { Layout, Button, Card } from '@shopify/polaris'
import axios from 'axios'

export default class About extends Component {
    constructor(props) {
      super(props)
      this.state = {
        products: []
      }
    }

    componentDidMount() {
      axios.get('/api/productsss')
        .then(result => this.setState({ products: result.data.products }))
    }

    renderProducts(products) {
      return products.map((item, index) => {
        return (
          <Card title={item.title} sectioned key={index}>
            <p>Id: {item.id}</p>
            <p>Vendor: {item.vendor}</p>
            <p>Product type: {item.product_type}</p>
          </Card>
        )
      })
    }

    render() {
        return (
            <Layout sectioned>
                <div>This is about page</div>
                <Button
                    primary
                    onClick={ () => {
                        console.log('click')
                        this.props.gotoDashboardPage()
                    }}
                >go to dashboard page</Button>
              <Button
                primary
                onClick={ () => {
                  console.log('click')
                  axios.post('/api/add_product', {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                  })
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >Add a product</Button>
                <Card title="About us" sectioned>
                    <p>View a summary of your online store’s performance.</p>
                    { this.renderProducts(this.state.products) }
                </Card>
            </Layout>
        );
    }
}