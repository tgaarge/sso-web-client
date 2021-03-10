import React from 'react'

class Layout extends React.Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        return (
            <div className="LayoutContainer">
                <div className="layout_app_main_area">
                    <Component route={route} />
                </div>
            </div>
        );
    }
}

export default Layout;