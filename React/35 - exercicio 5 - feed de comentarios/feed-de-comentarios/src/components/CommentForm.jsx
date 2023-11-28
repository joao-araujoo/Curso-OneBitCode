import InputEmail from "./InputEmail";
import TextareaComment from "./TextareaComment";

export default function commentForm({ email, setEmail, comment, setComment, onSubmit }) {
  return (
    <form>
      <InputEmail value={email} setValue={setEmail} />
      <TextareaComment value={comment} setValue={setComment} />
      <button type="submit" onClick={onSubmit}>
        Enviar comentário
      </button>
    </form>
  );
}