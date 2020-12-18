const body = document.querySelector('body');

const fireNotification = (text, color) => {
  const notification = document.createElement('div');
  notification.innerText = text;
  notification.style.background = color;
  notification.className = 'notification';
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} has joined!`, 'rgb(0,122,255)');
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} just left!`, 'rgb(255, 149, 0)');
};
