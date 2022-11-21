const Blogs = () => {
  return (
    <div className="w-8/12 mx-auto my-5">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react-router?
        </div>
        <div className="collapse-content">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse my-5 collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does context api work?
        </div>
        <div className="collapse-content">
          <p>
            Context is a built-in API introduced in ​​React 16.3. It makes it
            possible to pass data from parent to children nested deep down the
            component tree directly, instead of passing it down through a chain
            of props.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is useRef in REACT?
        </div>
        <div className="collapse-content">
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
