
function showNotification({ top = 0, right = 0, className, html }) {

  let notification = document.createElement("div");

  notification.className = "notification";

  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + "px";
  notification.style.right = right + "px";

  notification.innerHTML = html;

  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

let i = 1;
let count = 0;

let intervalId = setInterval(() => {

    document.querySelectorAll('.notification').forEach((notification) => notification.remove());

  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
  
  count++;

  if (count === 5) {
    clearInterval(intervalId);

    console.log("Operation completed. Notifications stopped.");

    setTimeout(() => {
        showLastMessage();
    }, 1500);
  }
}, 2000);


function showLastMessage() {
    let lastMessage = document.createElement('div');
    lastMessage.className = "notification last-message";
    lastMessage.textContent = "Hello";
    lastMessage.style.position = "fixed";
    lastMessage.style.top = "";
    lastMessage.style.right = "";
    document.body.append(lastMessage);
  }
