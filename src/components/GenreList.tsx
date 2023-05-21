import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return <Text>No Genres Available</Text>;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading marginBottom={"3"} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius="8px"
                src={getCroppedImageUrl(data.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(data)}
                variant={"link"}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
