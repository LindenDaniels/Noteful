import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList';

class MainSideBar extends Component {
    render() {
        return (
            <div>
                <FolderList
                  folder={this.props.folder}
                />
            </div>
        )
    }
}

export default MainSideBar;
