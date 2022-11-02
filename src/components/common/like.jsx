import React from "react";

// Input: liked: boolean
// Output: onClick

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.Liked) classes += "-o";
  return <i onClick={props.onClick} className={classes} aria-hidden="true"></i>;
};

export default Like;
