import { useEffect, useState, useRef } from "react";
import "./App.css";
import Card from "./Components/Card";
import Chat from "./Components/Chat";
import cardsData from "./data/data.json";
import { clone } from "./utils";

function App() {
  const [selectedId, setSelectedId] = useState(-1);
  const [filteredCards, setFilteredCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsData;
    setFilteredCards(clone(cardsData));
  }, []);

  const updateCard = (updatedCard) => {
    const updater = (card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    };

    cardsRef.current = cardsRef.current.map(updater);
    setFilteredCards(filteredCards.map(updater));
  };

  const handleSelect = (id) => {
    const updater = (card) => {
      if (card.id === id) {
        return { ...card, isSelected: true };
      } else {
        return { ...card, isSelected: false };
      }
    };
    cardsRef.current = cardsRef.current.map(updater);
    setFilteredCards(filteredCards.map(updater));
    setSelectedId(id);
  };

  const getCardById = (id) => {
    return cardsRef.current.filter((card) => card.id === id)[0];
  };

  const handleSearch = (e) => {
    const value = e.target.value.toUpperCase();
    const length = value.length;

    const filteredByorderId = cardsRef.current.filter((card) => {
      return card.orderId.substr(0, length).toUpperCase() === value;
    });
    if (filteredByorderId.length > 0) {
      setFilteredCards(filteredByorderId);
    } else {
      const filteredByTitle = cardsRef.current.filter((card) => {
        return card.title.toUpperCase().includes(value);
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
