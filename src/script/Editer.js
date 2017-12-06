/**
 *  created by ling on 2017-12-6 14:46.
 */
import React from "react";
let Remarkable = require('remarkable');

require("../style/editer.scss");

class Editer extends React.Component{
    constructor(props){
        super(props);
        this.state = {markStr:'Type some *markdown* here!'};
        this.handleEditerChange = this.handleEditerChange.bind(this);
    }

    handleEditerChange(e){
        this.setState({markStr:e.target.value})
    }

    convertMarkup(){
        let md = new Remarkable();
        return {__html:md.render(this.state.markStr)};
    }

    render(){
        return(
            <div className="markdown-editer">
                <div className="editer">
                    <textarea
                        placeholder="请输入 *Markdown* 语句"
                        onChange={this.handleEditerChange}
                    />
                </div>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.convertMarkup()}
                    contentEditable={true}
                >
                </div>
            </div>
        )
    }
}

export default Editer;