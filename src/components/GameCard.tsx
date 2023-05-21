import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  return (
    <Card width={"100%"} borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(props.game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={"2"}>
          <PlatformIconList
            platforms={props.game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
          <CriticScore score={props.game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
        <Emoji rating={props.game.rating_top}></Emoji>
      </CardBody>
    </Card>
  );
};
export default GameCard;
