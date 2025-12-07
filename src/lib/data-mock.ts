import MockGameList from "@/mock/mock-game-list.json";
import type { GameMock } from "@/types/game";

function getGameListMock(): GameMock[] {
  return MockGameList.map((game) => ({
    id: game.id,
    name: game.name,
    imagePath: game.image_path,
    gameStore: game.game_store,
    genre: game.genre,
    developer: game.developer,
    lastTimeSearched: game.last_time_searched,
  }));
}

export { getGameListMock };