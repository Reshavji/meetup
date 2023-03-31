// Get HTML elements
const newMessageForm = document.getElementById('new-message-form');
const newMessageTextarea = document.getElementById('new-message-textarea');
const messageList = document.getElementById('message-list');

// Array to store threads and messages
let threads = [
  {
    id: 1,
    name: 'John Doe',
    messages: [
      {
        body: 'Hey, how are you?',
        timestamp: '2023-03-30T18:45:00Z',
        sent: false
      },
      {
        body: 'I\'m doing well, thanks! How about you?',
        timestamp: '2023-03-30T19:00:00Z',
        sent: true
      }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    messages: [
      {
        body: 'Hi there!',
        timestamp: '2023-03-30T20:00:00Z',
        sent: false
      }
    ]
  }
];

// Render message list for a given thread
function renderMessageList(threadId) {
  // Find thread with given ID
  let thread = threads.find(thread => thread.id === threadId);

  // Render message list
  messageList.innerHTML = '';
  thread.messages.forEach(message => {
    let li = document.createElement('li');
    li.className = message.sent ? 'sent' : 'received';
    li.textContent = message.body;
    messageList.appendChild(li);
  });
}

// Handle new message form submit event
newMessageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!newMessageTextarea.value) return;

  let currentThreadId = parseInt(localStorage.getItem('currentThreadId'));
  let thread = threads.find(thread => thread.id === currentThreadId);
  thread.messages.push({
    body: newMessageTextarea.value,
    timestamp: new Date().toISOString(),
    sent: true
  });
  renderMessageList(currentThreadId);
  newMessageTextarea.value = '';
});

// Initialize messaging page
function initMessagingPage() {
  // Set current thread ID
  let currentThreadId = 1;
  localStorage.setItem('currentThreadId', currentThreadId);

  // Render initial message list
  renderMessageList(currentThreadId);
}

// Call initMessagingPage when page is loaded
window.addEventListener('load', initMessagingPage);
