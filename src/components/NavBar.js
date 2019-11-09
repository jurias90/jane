/** @jsx jsx */
import {css , jsx} from '@emotion/core';
import {Link} from "react-router-dom";

const style = css`background:#5755d9; text-align:center;`;


function NavBar(){
    return(
        <div css={style}>
           <Link to='/'><span>💛</span></Link> 
        </div>


    )
}

export default NavBar;