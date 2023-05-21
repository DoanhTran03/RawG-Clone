import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`, //Device lager than 1024px
      }}
      templateColumns={{ base: "1fr", lg: "230px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(search) =>
            setGameQuery({ ...gameQuery, searchText: search })
          }
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
            selectedGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform: platform })
                }
                selectedPlatform={gameQuery.platform}
              ></PlatformSelector>
            </Box>
            <SortSelector
              onSelectOrder={(order) =>
                setGameQuery({ ...gameQuery, sortOrder: order.value })
              }
              gameQuery={gameQuery}
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
