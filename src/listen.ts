import { app } from "./text-to-speech";

const server = app.listen(9090, () => {
  console.log(`Server is listing on port 9090`);
});
server.on("error", (e) => console.error("Error", e));

export default app;
