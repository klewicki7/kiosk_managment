import {connect} from 'react-redux';
import actions from "../redux/actions/auth";
import RendicionesScreen from '../screens/RendicionesScreen';

const mapStateToProps = (state) => ({
    gananciaPorMes: state.auth.historialGananciaXMes,
    rendicionesSemanales: state.auth.rendicionesSemanales,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(RendicionesScreen);
