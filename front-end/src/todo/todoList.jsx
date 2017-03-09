import React from 'react';
import IconButton from '../template/iconButton'
export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'concluido' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                                onClick={() => props.concluir(todo)}> </IconButton>
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                                onClick={() => props.desfazer(todo)}> </IconButton>
                    <IconButton style="danger" icon="trash-o"
                        onClick={() => props.remove(todo)}> </IconButton>
                </td>
            </tr>

        ))
    }

    return (
        <div>
            <table className="table table-responsive table-striped">
                <thead>
                <tr>
                    <th>Descricao</th>
                    <th className="tableActions">Ações</th>
                </tr>
                </thead>
                <tbody>
                {renderRows()}
                </tbody>
            </table>
        </div>
    )
}