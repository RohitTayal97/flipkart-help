import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Chat from "./Components/Chat";

function App() {
  const [selectedId, setSelectedId] = useState(-1);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
      .then((res) => res.json())
      .then((cardsData) => {
        setCards(cardsData);
        setFilteredCards(JSON.parse(JSON.stringify(cardsData)));
      });
  }, []);

  const updateCard = (updatedCard) => {
    const updater = (card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    };

    setFilteredCards(filteredCards.map(updater));
    setCards(cards.map(updater));
  };

  const handleSelect = (id) => {
    const updater = (card) => {
      if (card.id === id) {
        return { ...card, isSelected: true };
      } else {
        return { ...card, isSelected: false };
      }
    };
    setCards(cards.map(updater));
    setFilteredCards(filteredCards.map(updater));
    setSelectedId(id);
  };

  const getCardById = (id) => {
    return cards.filter((card) => card.id === id)[0];
  };

  const handleSearch = (e) => {
    const value = e.target.value.toUpperCase();
    const length = value.length;

    const filteredByorderId = cards.filter((card) => {
      return card.orderId.substr(0, length).toUpperCase() === value;
    });
    if (filteredByorderId.length > 0) {
      setFilteredCards(filteredByorderId);
    } else {
      const filteredByTitle = cards.filter((card) => {
        return card.title.substr(0, length).toUpperCase() === value;
      });
      setFilteredCards(filteredByTitle);
    }
  };

  return (
    <div className="App">
      <div className="left">
        <div className="search">
          <div>Filter by Title / Order ID</div>
          <input
            name="search"
            type="text"
            placeholder="start typing to search"
            onKeyUp={(e) => handleSearch(e)}
          ></input>
        </div>
        {filteredCards &&
          filteredCards.map((cardData) => {
            return (
              <Card
                key={cardData.id}
                data={cardData}
                handleSelect={handleSelect}
              />
            );
          })}
      </div>
      {selectedId >= 0 && (
        <Chat data={getCardById(selectedId)} updateCard={updateCard} />
      )}
    </div>
  );
}

export default App;
