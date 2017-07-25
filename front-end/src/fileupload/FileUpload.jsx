import React from 'react';

import './css/fileupload.css';

class FileUpload extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let file = event.target.files[0];

        if(!file.name.match(/\.(?:pdf|png|bpm|jpg|jpeg|txt|rtf|doc|docx|odt)$/)){
            let msg = document.getElementById('msg-ext');
            msg.classList.remove('fileup-esconder');
            event.preventDefault();
            window.setTimeout(() => msg.classList.add('fileup-esconder'), this.props.timeout || 3000);
            return;
        }
        if(file.size > this.props.maxSize || 5000000){
            let msg = document.getElementById('msg-size');
            msg.classList.remove('fileup-esconder');
            event.preventDefault();
            window.setTimeout(() => msg.classList.add('fileup-esconder'), this.props.timeout || 3000);
            return;
        }
    }


    render() {
        return (
            <div>
                <fieldset>
                    <legend>Anexos</legend>
                    <div className="fileup-description">

                        <p>Envie a documentação comprobatória para análise do pleito, caso necessário.</p>
                        <p>O tamanho de cada arquivo não pode exceder 5MB;</p>
                        <p>A soma dos tamanhos dos arquivos anexados a uma tarefa não pode exceder 30MB;</p>
                        <p>O arquivo deve ter uma das seguintes extensões: .PDF; .PNG; .BMP; .JPG; .JPEG; .TXT; .RTF; .DOC; .DOCX; .ODT.</p>

                    </div>

                    <div className="fileup-header">
                        <button className="fileup-button fileup-button-primary" >Anexar</button>
                        <input type="file" onChange={this.handleChange}/>
                        <p id="msg-ext" className="fileup-message fileup-esconder">Extensão do arquivo inválido!</p>
                        <p id="msg-size" className="fileup-message fileup-esconder">Tamanho do arquivo inválido!</p>
                    </div>
                    <div className="fileup-body">
                        <div className="fileup-progress">

                        </div>
                        <div className="fileup-detail">

                        </div>
                    </div>
                </fieldset>
            </div>
        )
    }

}

export default FileUpload;