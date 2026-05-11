import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { Character } from "../../types/Character"

export default function CharacterCard({ handleToggleFavourite, character, isFavourited }: { handleToggleFavourite: (id: number) => void, character: Character, isFavourited: boolean }) {

  const handleClick = () => {
    handleToggleFavourite(character._id)
  }

  return (
    <Card sx={{
      width: "350px",
      height: "400px"
    }}>
      <CardMedia
        sx={{
          height: 250,
          backgroundPosition: "top"
        }}
        image={character.imageUrl}
        title={character.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {character.name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleClick} aria-label="add to favorites">
          <FavoriteIcon color={isFavourited ? "primary" : "disabled"} />
        </IconButton>
      </CardActions>
    </Card>
  );
}