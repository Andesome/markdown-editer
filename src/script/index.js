/**
 *  created by ling on 2017-12-6 14:51.
 */
import React from "react";
import ReactDOM from "react-dom";
import Editer from "./Editer";

require("normalize.css");
require("../style/style.scss")

const App = () => {
    return(
        <section>
            <div className="intro">
                <h2>Markdown编辑器</h2>
                <p>左侧输入，右侧预览</p>
            </div>
            <Editer/>
        </section>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
)

export default App;