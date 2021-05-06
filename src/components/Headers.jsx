import React from "react";
import SearchIcon from '@material-ui/icons/Search';


function Headers(props) {
    const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
    return (
        <div className="header">
            {logo}
            <h3> keep </h3>
            <input type="text" placeholder= "Search" name = "Search" />
            <button type= "submit"> <SearchIcon/> </button>

        </div>
    );
}

export default Headers;