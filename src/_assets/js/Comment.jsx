var React = load('react/react');

module.exports = React.createClass({
  render: function () {
    var comment = this.props.comment;

    return (
      <div className="comment">{comment.body}</div>
    );
  }
});