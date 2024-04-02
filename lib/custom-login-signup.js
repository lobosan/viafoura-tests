window.vfQ = window.vfQ || [];
window.vfQ.push(() => {
  window.vf.$prepublish((channel, event, ...args) => {
    if (
      channel === "authentication" &&
      event === "required" &&
      args[0].method === "signup"
    ) {
      alert("trigger signup form");
      return false;
    }
    if (channel === "authentication" && event === "required") {
      alert("trigger login form");
      return false;
    } else {
      return { channel, event, args };
    }
  });
});
