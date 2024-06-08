import Tag from "./Tag.jsx";
import delete_icon from "../assets/delete.png";
import "./TaskCard.css";
import React, { useEffect } from "react";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selectd={true} />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img className="delete_icon" src={delete_icon} alt="Delete Task" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
