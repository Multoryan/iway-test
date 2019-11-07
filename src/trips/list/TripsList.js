import React from 'react';
import { connect } from 'react-redux';
import { getTrips } from '../../actions/trip';

class TripsList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    };

    componentWillMount () {
        this.props.getTrips({
            relations: ['clients', 'car', 'driver', 'dispatcher']
        });
    };

    render () {
        const list = this.props.list.map(item => <a href={ '/trip/' + item.id } key={item.id}>{ item.id } { item.vip } { item.type }</a>);

        return (
            <div className="trips-list">
                { list }
            </div>
        )
    }
}

const mapStateToProps = store => ({
    list: store.trip.list,
})

const mapActionsToProps = dispatch => ({
    getTrips: options => dispatch(getTrips(options))
});


export default connect(mapStateToProps, mapActionsToProps)(TripsList);