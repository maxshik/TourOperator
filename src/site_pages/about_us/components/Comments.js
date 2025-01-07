import React, { useState } from "react";
import comments from "../../../server/comments.json";
import "../style/comments.css";
import { message } from "antd";

function Comments() {
  const [messageApi, contextHolder] = message.useMessage();
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }
  const error = (text) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };

  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Загрузка...',
    });
  };
  let min_width_of_comment = 50,
      max_width_of_comment = 255;
  function handleSubmit(event) {
    event.preventDefault();
    if (comment.trim() === "" || name.trim() === "") {
      return;
    }
    if (comment.length < min_width_of_comment || comment.length > 255) {
      error("Комментарий должен быть длиннее " + min_width_of_comment  + " символов и не больше " + max_width_of_comment + " символов");
      return;
    }
    if (name.length < 2) {
      error('Введи имя длиннее 2 символов');
      return;
    }
    openMessage();
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      fetch("/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: "img/employees/Teodor.png", text: comment, name: name }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Успех:", data);
          setComment("");
          setName("");
          messageApi.open({
            key,
            type: 'success',
            content: 'Комментарий добавлен',
            duration: 2,
          });
        })
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    });
  }
  
  return (
    <>
      {contextHolder}
      <h1 className="page-title">Комментарии</h1>
      <div className="comments-wrapper">
        {comments.map((comment, index) => (
          <div key={index} className="comment-container">
            <div className="image-container">
              <img className="comment-image" src={comment.img} alt={comment.name} />
            </div>
            <div className="content-wrapper">
              <p className="name">{comment.name}</p>
              <p className="comment-text">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 style={{textAlign: "center", paddingTop: "5vh"}}>Оставьте свой комментарий</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Имя:
            <input type="text" value={name} onChange={handleNameChange} required />
          </label>
          <label>
            Комментарий:
            <input type="text" value={comment} onChange={handleCommentChange} required />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    </>
  );
}

export default Comments;
