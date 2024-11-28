import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PCard({ title, description ,img }) {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);
  const [height, setHeight] = React.useState(400);

  const handleExpandClick = () => {
    setHeight(expanded ? 400 : 600);
    setExpanded(!expanded);
  };

  return (
    <Card style={{ height: height, maxWidth: 345, backgroundColor: "" }} >
      <CardHeader
        avatar={
        <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        sx={{ textAlign:"left", bgcolor:"" }}
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Demo:</Typography>
          <Typography paragraph>Vercel link</Typography>
          <Typography paragraph>GitHub link</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
