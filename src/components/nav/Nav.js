import React from "react";
import styles from  "./Nav.module.css"


const Nav = ()=>{
    return <div className={styles.nav_container}>
        <nav>
            <img src="LOGO.svg" alt="logo"/>
            {/* <input className={styles.search_input} type="text" placeholder="  Search a question" />
            <button className={styles.join_now_btn}>Join Now</button> */}
        </nav>
</div>

}

export default Nav