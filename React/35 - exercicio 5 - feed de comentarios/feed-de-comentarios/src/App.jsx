import { useState } from "react";
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

export default function App() {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("comments-lib");
    return storedComments ? JSON.parse(storedComments) : [];
  });
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const getDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  const addComment = () => {
    const id = Math.floor(Math.random() * 1000000);

    setComments((state) => {
      const newState = [...state, { id, date: getDate(), email, comment }];
      localStorage.setItem("comments-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!email || !comment) {
      alert("Preencha todos os campos!");
      return;
    }

    addComment();

    setEmail("");
    setComment("");
  };

  return (
    <>
      <div className="container">
        <h2>Seção de Comentários</h2>
        <CommentForm
          email={email}
          setEmail={setEmail}
          comment={comment}
          setComment={setComment}
          onSubmit={handleSubmit}
        />
        <hr />
        <div className="comments">
          {comments.length > 0 ? (
            comments.map((comment) => <Comment key={comment.id} date={comment.date} email={comment.email} comment={comment.comment} />)
          ) : (
            <p>Seja o primeiro a comentar!</p>
          )}
        </div>
      </div>
    </>
  );
}
