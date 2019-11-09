/** @jsx jsx */

import {css, jsx} from "@emotion/core"

const bodyCss = css`text-align:center; height: calc(100vh - 70px); display:flex; align-items:center; padding:20px; -webkit-box-align:center; `;

function WelcomeBody(){
    return(
        <div css={bodyCss}>
            <h1>Discover the best in cannabis at Jane.</h1>

        </div>
    )
}

export default WelcomeBody;