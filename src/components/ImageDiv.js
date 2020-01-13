import React from "react";

export const ImageDiv = props => (
    <div>
        <h1>List of images</h1>
        {props.searchResult.map(oneSearch => {
            return (
                <img
                    src={oneSearch}
                    alt={""}
                    style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "20%"
                    }}
                />
            );
        })}
    </div>
);
