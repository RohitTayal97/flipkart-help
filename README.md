# Product Features

## Chat List

- The chat list loads with a list of chats as fetched from the api source.
- Clicking on a chat list opens the respective chat with the messages for that particular chat.
- Each chat list item shows basic chat information about that chat like Product Image, Chat Title, Order ID, Date in DD/MM/YYYY format of the last message.
- You can filter the Chat List via Chat Title / Order ID.
- The current selected chat is highlighted.

## Single Chat View

- Shows the messages for a particular chat in bottom to top order, i.e., The latest message is at the bottom of the chat.
- There are two message types - ‘text’ and ‘optionedMessage’. Both are displayed differently. Please refer to the mocks for the same.
- The messages are either left aligned or right aligned depending on the ‘sender’. If the ‘sender’ is ‘BOT’ the message is left aligned, else if the ‘sender’ is ‘USER’, it is right aligned.
- Show an input box similar to the mock. The message sent from here should get added to that particular chat as a ‘USER’ side message of type ‘text’.
- If there are no messages for a chat, a message is displayed - “Send a message to start chatting”.
- Show an inline Date label as a separation between messages on different dates in DD/MM/YYYY format. You can show labels like ‘Today’, ‘Yesterday’, etc. for dates upto a week before the current date.
- The message options for an ‘optionedMessage’ are disabled if it’s not the latest message (it’s not the message at the bottom end of the chat).
- On clicking “Request a Call” a message is added from the USER side (right side) saying “I want a callback”.
