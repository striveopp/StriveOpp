import React from "react";
import AccessDatabase from "./AccessDatabase";
import BookWithMe from "./BookWithMe";
import ResumeWriting from "./ResumeWriting";
import "./SelfServe.css";

const SelfServe = () => {
    return(
        <div className="selfserve">
            <h1 className="selfserve">Self-Service</h1>
            
            <div className="containerselfserve">
                <div className="selfserveleft">
                    <BookWithMe />
                </div>
                <div className="selfserveright">
                    <AccessDatabase /> 
                    <ResumeWriting />
                </div>
            </div>
        </div>
    )
}

export default SelfServe;