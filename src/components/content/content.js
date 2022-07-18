import React from "react";
import { ContentWrap } from "./contentStyles";


function Content() {
    return (
        <ContentWrap>
            <h3>Bulldog's stories</h3>
            <div className="boxWrap">
                <img className="french1" src={require("src/components/content/imgs/French-Bulldog_1.png")} />
                <img className="french2" src={require("src/components/content/imgs/French-Bulldog_2.jpeg")} />
                <img className="french3" src={require("src/components/content/imgs/French-Bulldog_3.webp")} />
                <img className="french4" src={require("src/components/content/imgs/French-Bulldog_4.webp")} />
            </div>
        </ContentWrap>
    )
}

export default Content;