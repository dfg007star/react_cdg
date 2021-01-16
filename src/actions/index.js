const worklogsLoaded = (newWorklogs) => {
  return {
    type: "WORKLOGS_LOADED",
    payload: newWorklogs,
  };
};

export { worklogsLoaded };
