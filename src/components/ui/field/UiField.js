import React from 'react';

class UiField extends React.Component {
    render () {
        return (
            <label className="field">
                <span className="field__label">{this.props.label}</span>
                <input
                    className="field__input"
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    required={this.props.required}
                    onChange={e => this.props.onChange(e.target.value)}
                    onFocus={this.props.onFocus}
                />
            </label>
        )
    }
};

export default UiField;