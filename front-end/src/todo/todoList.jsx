import React from 'react';
import IconButton from '../template/iconButton'
export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o"
                        onClick={() => props.remove(todo)}></IconButton>
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
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {renderRows()}
                </tbody>
            </table>
        </div>
    )
}