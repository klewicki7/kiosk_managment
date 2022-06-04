import {connect} from 'react-redux';
import actions from "../redux/actions/auth";
import SummaryScreen from '../screens/SummaryScreen';

const mapStateToProps = (state) => ({
    test : state.auth.suma
});

const mapDispatchToProps = dispatch => ({
    suma : (payload) => dispatch(actions.exampleRequest(payload)),
    
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(SummaryScreen);
