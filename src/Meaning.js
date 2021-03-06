import React from "react";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                            <br />
                            <strong>Example: </strong>
                            <em>{definition.example}</em>
                        </p>
                    </div>
                );
            })}
        </div>
    )
}