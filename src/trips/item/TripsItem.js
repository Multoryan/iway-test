import React from 'react';
import { connect } from 'react-redux';
import { getTripById } from '../../actions/trip';

class TripsItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    };

    componentWillMount () {
        this.props.getTripById(this.props.id);
        console.log(this.props);
    };


    render () {
        return (
            <div>{ this.props.trip.uid }</div>
        );
    }
};

const mapStateToProps = store => ({
    trip: store.trip.current
});

const mapActionsToProps = dispatch => ({
    getTripById: id => dispatch(getTripById(id))
})

export default connect(mapStateToProps, mapActionsToProps)(TripsItem);