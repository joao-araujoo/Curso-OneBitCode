export default function inputEmail({ value, setValue }) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        required
      />
    </div>
  );
}