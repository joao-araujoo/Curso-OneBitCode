export default function textareaComment({ value, setValue }) {
  return (
    <div>
      <label htmlFor="comment">Comentário:</label>
      <textarea
        name="comment"
        id="comment"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        maxLength={300}
        rows="4"
      ></textarea>
    </div>
  );
}