function Post({ image, title, description, date }) {
  return (
    React.createElement("div", { className: "post" },
      React.createElement("img", { className: "postImg", src: image, alt: "" }),
      React.createElement("div", { className: "postInfo" },
        React.createElement("span", { className: "postTitle" }, title),
        React.createElement("hr", null),
        React.createElement("span", { className: "postDate" }, date)),
      React.createElement("p", { className: "postDesc" }, description))
  );
}

function Posts() {
  const [postlist, setpostlist] = React.useState([]);

  React.useEffect(() => {
    const callAPI = async () => {
      console.log('Calling API...');
      const response = await fetch("http://127.0.0.1:3001/blogs");
      const body = await response.json();
      console.log(body);
      const newPosts = body.map((b) => ({
        image: b.image64,
        title: b.title,
        description: b.content,
        date: b.date.split('T')[0],
        id: b.id
      }));
      setpostlist(newPosts);
    };
    callAPI();
  }, []);

  if (postlist.length === 0) {
    return React.createElement("h1", null, "loading");
  }

  return React.createElement("div", { className: "posts" },
    postlist.map((ytryt) =>
      React.createElement(Post, {
        image: ytryt.image,
        title: ytryt.title,
        description: ytryt.description,
        date: ytryt.date
      }))
  );
}
