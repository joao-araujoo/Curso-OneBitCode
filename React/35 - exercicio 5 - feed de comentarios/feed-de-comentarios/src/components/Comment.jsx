import PropTypes from "prop-types"

Comment.propTypes = {
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

export default function Comment({ email, date, comment }) {
  return (
    <div>
      <h3>{email}</h3>
      <p>Em {date}</p>
      <p>{comment}</p>
    </div>
  );
}