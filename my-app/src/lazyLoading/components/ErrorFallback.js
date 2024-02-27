function ErrorFallback({error, resetErrorBoundary}) {
  console.log('message::---',error.message);
  return (
    <div>
      <p>Something went wrong</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
