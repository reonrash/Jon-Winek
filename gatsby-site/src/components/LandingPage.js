import React from "react"
import style from "../styles/LandingPage.module.scss"
import { Link } from "gatsby"


function LandingPage() {



    return (
        <div className={style.missionDiv}>
                  <h1 className={style.missionH1}> Mission Statement</h1>
                  <div className={style.missionBox}>
                    <p className={style.missionP}>
                      {" "}
                      My mission is to provide quality therapeutic services to
                      families, couples and individuals. I assist my clients in
                      improving their relationships and creating positive
                      changes in their lives. Working from a holistic and
                      developmental perspective, I assist clients to develop
                      their full potential in order to thrive.
                    </p>
                  </div>
                  <Link to="/contact">  <button className={style.button} > Get in Contact </button>  </Link>
        </div>
    )
} export default LandingPage