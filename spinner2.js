let delay = 100; //ms (milliseconds)

let spinnerPositions = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    '];

spinnerPositions.forEach(x => {
  setTimeout(() => {
    process.stdout.write(x);
  }, delay += 200);
});
