import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
    if (props.results) {

        return (<div className="Results">
            <h3>{props.results.word}</h3>
            {props.results.meanings.map(function (meaning, index) {
                return (
                    <div key={index}>
                        <Meaning meaining={meaning} />
                    </div>
                );
            })}
        </div>
        );
    } else {
        return null;
    }
}