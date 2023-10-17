import { MouseEvent, useState } from "react";
import "./ListGroup.css";

interface ListGroupProps {
  items: string[];
  heading?: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handlers
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <div className="spaced-out">
      {heading && (<h2 className="secondaryTextColor">{heading}</h2>)}
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
