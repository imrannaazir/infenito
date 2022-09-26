import React from "react";
import Tags from "./Tags";
import Topics from "./Topics";

const TagsTopics = () => {
  return (
    <div className="flex">
      {/* topics */}
      <Topics />
      {/* Tags */}
      <Tags />
    </div>
  );
};

export default TagsTopics;
