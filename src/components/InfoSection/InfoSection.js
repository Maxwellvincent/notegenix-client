import React from 'react';
import { GoNote, GoInfo } from "react-icons/go";
import "../InfoSection/InfoSection.css";

function InfoSection(){
    return(
        <div className="second-layer">
            <div className="three_icons">
                <div>
                    <a href="/start"><GoNote className="icon"/></a>
                    <p>Do you have a task you one to complete? Click the note to get Started!</p>
                </div>
                <div>
                    <a href="/about"><GoInfo className="icon"/></a>
                    <p>Click to find out more about how this application came to begin</p>
                </div>
                {/* <div>
                    <a href="/login"><img alt="paw" src=""/></a>
                    <p>thtiieo oshsh dskllasdjfk oio  asdflasdfk oiu skdfla sdfojijlk a Get started by clicking on the bone!</p>
                </div> */}
            </div>
        </div>
    )
}

export default InfoSection