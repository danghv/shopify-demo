import React, {Component} from 'react'
import {Card, Tabs, Layout } from '@shopify/polaris'

export default class TabsExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        };
    }

    handleTabChange(selectedTabIndex) {
        this.setState({selected: selectedTabIndex});
    }

    render() {
        const {selected} = this.state;
        const tabs = [
            {
                id: 'all-customers',
                content: 'All',
                accessibilityLabel: 'All customers',
                panelID: 'all-customers-content',
            },
            {
                id: 'accepts-marketing',
                content: 'Accepts marketing',
                panelID: 'accepts-marketing-content',
            },
            {
                id: 'repeat-customers',
                content: 'Repeat customers',
                panelID: 'repeat-customers-content',
            },
            {
                id: 'prospects',
                content: 'Prospects',
                panelID: 'prospects-content',
            }
        ];
        return (
            <Layout.Section>
                <Card>
                    <Tabs
                        tabs={tabs}
                        selected={selected}
                        onSelect={this.handleTabChange}
                    />
                    <Card.Section title={tabs[selected].content}>
                        <p>Tab {selected} selected</p>
                    </Card.Section>
                </Card>
            </Layout.Section>
        );
    }
}