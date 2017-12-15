/**
 *  created by ling on 2017-12-6 14:46.
 */
import React from "react";

var hljs = require("highlight.js");

let Remarkable = require('remarkable');

require("../style/editer.scss");

class Editer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {markStr: 'Type some *markdown* here!'};
        this.handleEditerChange = this.handleEditerChange.bind(this);
    }

    handleEditerChange(e) {
        this.setState({markStr: e.target.value})
    }

    convertMarkup() {
        let md = new Remarkable();
        // console.log(md.render(this.state.markStr));

        return {__html: md.render(this.state.markStr)};
    }

    componentDidUpdate() {
        let oEditor = this.refs.editor;
        let oCodeBlock = oEditor.querySelectorAll("pre code");
        oCodeBlock.forEach((dom, key) => {
            console.log(hljs.highlightBlock(dom))
        })
        console.log(oCodeBlock)
    }


    render() {
        return (
            <div className="markdown-editer" ref="editor">
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