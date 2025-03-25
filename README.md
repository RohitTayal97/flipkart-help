# Flipkart Help Chat

This is Flipkart customer support app. It allows users to view a list of orders and open a selected order to see the conversation history. The order list can be filtered by order name or order ID. Each order item displays relevant information, such as product image, order name, order ID, and date of the last message. Users can send text messages from an input box, and an inline date label separates messages on different dates.

## Deployed at

https://e-commerce-help-chat.netlify.app/

## Funtionalities

## Order List

- The app loads an order list from a JSON file in the data folder.
- Clicking on an order highlights it and opens the respective chat with its messages.
- Basic information for each order is displayed, including product image, order name, order ID, and date of the last message in DD/MM/YYYY format.
- The order list can be filtered by order name or order ID.

## Single Chat View

- Messages for a particular order are displayed in a generic chat format, with the latest message shown at the bottom.
- Messages are left-aligned or right-aligned based on the sender, with BOT messages left-aligned and user messages right-aligned.
- Two message types are supported: 'text'(normal) and 'optionedMessage', which are displayed differently.
- Like Clicking on the "Request a Call" option in an opinionated message adds a message from the user saying "I want a callback".
- Options for 'optionedMessage' messages are disabled if they are not the latest message in the chat.
- User can send messages using the input box at the bottom of chatbox.
- If there are no messages in a chat, a message is displayed in the center of the chatbox prompting the user to send a message to start chatting.
- Dates are displayed inline as labels in DD/MM/YYYY format, with labels like 'Today', 'Yesterday', etc. shown for dates up to a week before the current date.

To run the app locally, Use `npm start` to run the app. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
