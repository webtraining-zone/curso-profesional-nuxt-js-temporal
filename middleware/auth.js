export default function({error}) {
  // We don't have a user yet!!!!
  const authUser = false;

  if (!authUser) {
    error({
      message: 'Please start a session before seeing this page...',
      statusCode: 403,
    });
  }
}
