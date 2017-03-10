import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/iconButton';
import {add, clear, changeDescription, search} from './todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount(){
        this.props.search();
    }

    keyHandler(event) {
        const {add, clear, search, descricao} = this.props;
        if (event.key == 'Enter') {
            event.shiftKey ? search() : add(descricao);
        } else if (event.key == 'Escape') {
            clear();
        }
    }

    render() {
        const {add, clear, search, descricao} = this.props;
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="descricao" value={descricao}
                           onChange={this.props.changeDescription}
                           onKeyUp={this.keyHandler}
                           className="form-control" placeholder="Adicione uma tarefa."/>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => add(descricao)}/>
                    <IconButton style="info" icon="search" onClick={search}/>
                    <IconButton style="default" icon="close" onClick={() => clear()}/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({descricao: state.todo.descricao});
const mapDispatchToProps = dispatch =>
    bindActionCreators({add, clear, changeDescription, search}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);