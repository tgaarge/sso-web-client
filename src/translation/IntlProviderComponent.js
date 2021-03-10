import React, { PureComponent } from "react";
import { IntlProvider } from "react-intl";
import { getLocale } from '../helpers/common/localization'
import Languages from './index'

export default class IntlProviderComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            locale: getLocale()
        };
    }

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={Languages[this.state.locale]}>
                <>
                    {this.props.children}
                </>
            </IntlProvider>
        );
    }
}