import React from 'react'

class AnonymousLayout extends React.Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        return (
            <div className="anonymous_layout_container">
                <div className="anonymous_layout_main_area">
                    <Component route={route} />
                </div>
            </div>
        );
    }
}

export default AnonymousLayout;