import React from 'react';
const Emoji = props => (
    <option
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        value={parseInt(props.value, 10)}
    >
        {props.symbol}
    </option>
);
export default Emoji;

// const Emoji = props => (
//     <option
//       className="emoji"
//       role="img"
//       aria-label={props.label ? props.label : ""}
//       aria-hidden={props.label ? "false" : "true"}
//       value={props.label}
//     >
//       {props.symbol}
//     </option>
//   )