var React = load('react/react');
var CommentEditor = load('CommentEditor');
var CommentList = load('CommentList');

module.exports = React.createClass({

  render: function () {
    var user = this.props.user;
    var comments = this.props.comments;

    return (
      <section className="comments">
        <CommentEditor user={user} />
        <CommentList comments={comments} />
      </section>
    );

  }

})