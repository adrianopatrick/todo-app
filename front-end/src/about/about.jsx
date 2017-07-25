import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FileUpload from '../fileupload/FileUpload';

class About extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <FileUpload />
        )
    }
}

const mapStateToProps = state => ({anexos: state.about.anexos})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);