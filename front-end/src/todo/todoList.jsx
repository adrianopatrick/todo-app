import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from '../template/iconButton'
import {markAsDone, markAsPending, remove} from './todoActions';

const TodoList = props => {

    const renderRows = () => {
        const {markAsDone, markAsPending, remove} = props;
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'concluido' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                                onClick={() => markAsDone(todo)}> </IconButton>
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                                onClick={() => markAsPending(todo)}> </IconButton>
                    <IconButton style="danger" icon="trash-o"
                                onClick={() => remove(todo)}> </IconButton>
                </td>
            </tr>

        ))
    };

    return (
        <div>
            <table className="table table-responsive table-striped">
                <thead>
                <tr>
                    <th>Descricao</th>
                    <th className="tableActions">Ações</th>
                </tr>/
                </thead>
                <tbody>
                {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = dispatch =>
    bindActionCreators({markAsDone, markAsPending, remove}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);