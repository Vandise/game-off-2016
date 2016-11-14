export const clientMiddleware = () => {
  return store => next => action => {
    console.log('TODO: dispatch user input to Phaser here', store, action);
    return next(action);
  };
};

export default clientMiddleware;