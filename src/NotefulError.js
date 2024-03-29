import React, { Component } from 'react';



class NotefulError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
      }
      render() {
        if (this.state.hasError) {      
          return (
            <h2>The note could not be displayed.</h2>
          );
        }
        return this.props.children;
      }  
}

export default NotefulError;