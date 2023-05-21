import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  onSelectOrder: (order: { value: string; label: string }) => void;
}

const SortSelector = ({ onSelectOrder, gameQuery }: Props) => {
  const sortOrder = [
    {
      value: "",
      label: "Relavance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-release",
      label: "Release date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === gameQuery.sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem onClick={() => onSelectOrder(order)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
