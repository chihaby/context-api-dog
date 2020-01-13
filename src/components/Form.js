import React from "react";

export const Form = props => (
    <div>
        <form
            style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px"
            }}
            onSubmit={props.handleSubmit}
        >
            <input type="text" name="name" onChange={props.handleChange} />
            <button className="search-button" type="submit">
                Submit
            </button>
        </form>
    </div>
);
