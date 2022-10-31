import React, { Component } from 'react';
import { render } from 'react-dom';
import { BiUser } from "react-icons/bs";
import { FaRegComment, FaRegUser } from "react-icons/fa";

import { FiSettings } from "react-icons/fi";

import { GoLocation } from "react-icons/go";
import Nav from '../../components/newnav/Nav';
import './About.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: null
        };
    }

    changeTab = e => {
        this.setState({
            activeTab: e.target.dataset.key
        });
    }

    getNavTabs = () => {
        console.log(this.state.activeTab == 0);
        return (
            <div class="nav-tabs">
                <div
                    key={0}
                    className={`tab ${this.state.activeTab == 0 ? 'active' : ''}`}
                    data-key={0}
                    onClick={this.changeTab}
                >
                    <i data-key={0} ><FaRegComment /></i>
                </div>
                <div
                    key={1}
                    className={`tab ${this.state.activeTab == 1 ? 'active' : ''}`}
                    data-key={1}
                    onClick={this.changeTab}
                >
                    <i data-key={1} ><FaRegUser /></i>
                </div>
                <div
                    key={2}
                    className={`tab ${this.state.activeTab == 2 ? 'active' : ''}`}
                    data-key={2}
                    onClick={this.changeTab}
                >
                    <i data-key={2} ><GoLocation /></i>
                </div>
                <div
                    key={3}
                    className={`tab ${this.state.activeTab == 3 ? 'active' : ''}`}
                    data-key={3}
                    onClick={this.changeTab}
                >
                    <i data-key={3} class="fas fa-cog"><FiSettings /></i>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Nav
                    active={this.state.activeTab}
                    getTabs={this.getNavTabs}
                />
            </div>
        );
    }
}

// render(<App />, document.getElementById('root'));
export default App;