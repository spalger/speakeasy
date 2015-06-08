var React = load('react/react');
var CommentSection = load('CommentSection');

var section = document.getElementById('posts-comments');
React.render(React.createElement(CommentSection), section);