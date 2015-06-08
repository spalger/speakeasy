var React = load('react/react');
var Comment = load('Comment');

module.exports = React.createClass({
  render: function () {
    var comments = this.props.comments || [];

    return (
      <ul className="comments">
      {
        comments.map(function (comment) {
          return <Comment key={comment.id} comment={comment} />
        })
      }
      </ul>
    );
  }
});