var React = load('react/react');

module.exports = React.createClass({
  render: function () {
    var user = this.props.user;

    if (!user) {
      // return <p>sign in to leave a comment</p>;
      return null;
    }

    return (
      <textarea>insert comment editor</textarea>
    );
  }
});
