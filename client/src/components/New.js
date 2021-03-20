import React from 'react'


class New extends React.Component {

    state = {

    }

    render() {
        return (
            <div>
                {this.props.location.state.test}
                {this.props.location.state.test2}
                {this.props.location.state.test3}
            </div>
        )
    }
}


export default New;