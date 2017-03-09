import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/iconButton';
import changeDescription from './todoActions';

const TodoForm = props => {

    const keyHandler = (e) => {
        if(e.key == 'Enter') {
            e.shiftKey ? props.search() : props.add();
        } else if (e.key == 'Escape') {
            props.clear();
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input id="descricao" value={props.descricao}
                       onChange={props.changeDescription}
                       onKeyUp={keyHandler}
                       className="form-control" placeholder="Adicione uma tarefa."/>
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus" onClick={props.add}/>
                <IconButton style="info" icon="search" onClick={props.search}/>
                <IconButton style="default" icon="close" onClick={props.clear}/>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({descricao: state.todo.descricao});
const mapDispatchToProps = dispatch =>
    bindActionCreators({changeDescription}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);