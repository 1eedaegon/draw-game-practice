import { handleNewMessage } from './chat';
import { handleNewUser, handleDisconnected } from './notifications';

let socket;

export const getSocket = () => socket;

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aScoket) => {
  const { events } = window;
  updateSocket(aScoket);
  aScoket.on(events.newUser, handleNewUser);
  aScoket.on(events.disconnected, handleDisconnected);
  aScoket.on(events.newMsg, handleNewMessage);
};
