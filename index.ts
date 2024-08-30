import WebSocket from "ws"
const ws = new WebSocket("ws://localhost:3000");
const PERSON = "@Rick_1";
const randomID = () => "X" + Math.round(Math.random() * 999999);
const sayHello = (connection: WebSocket) => {
  const command = { corrId: randomID(), cmd: PERSON + " Hello world!" };
  connection.send(JSON.stringify(command));
};
ws.on("open", () => sayHello(ws));
ws.on("close", () => console.log("Bye"));
ws.on("error", (err) => console.error(err));
ws.on("message", (data) => console.log(data.toString()));
