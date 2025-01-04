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

export default function PCard({ title, description ,img ,vercel,github}) {
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
    setHeight(expanded ? 400 :"100%" );
    setExpanded(!expanded);
  };

  return (
    <Card style={{ height: height, maxWidth: 345, backgroundColor: "rgb(40, 38, 38)" , border:"1px solid grey" , boxSizing: "border-box"}} >
      <CardHeader
        avatar={
        <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        sx={{ textAlign:"left",color:"white" }}
        title={title}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="Paella dish"
      />
     <CardContent sx={{  height: expanded ? 'auto' : '100px',
       overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          padding: "10px",
          color: "white",
          borderBottom: expanded ?"1px solid red":"",
          scrollbarWidth: "none", 
          msOverflowStyle: "none", // IE: hide scrollbar


     }}>
  <Typography variant="body2" sx={{ color: "white",fontFamily:"Times-roman",textAlign:"left" }}>
    {description}
  </Typography>
  
</CardContent>

      <CardActions disableSpacing sx={{border:"1ps solid green"}}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon  sx={{color:"white" , position:"absolute", bottom: 30,right: expanded ?-10:0, bgcolor:"grey", borderRadius:"50%"}}/>
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
     <CardContent sx={{ color: "white", textAlign: "left", padding: 2 }}>
  <Typography paragraph sx={{ width: "100%", fontWeight: "bold" }}>
    Demo:
  </Typography>
  <Typography paragraph sx={{ textAlign: "left", width: "100%" }}>
    Vercel link:{" "}
    <a
      href={vercel}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "white",
        textDecoration: "underline",
        display: "block",
       color:" rgb(61, 188, 208)",
        marginTop: 4,
      }}
    >
    {vercel}
    </a>
  </Typography>
  <Typography paragraph sx={{ textAlign: "left", width: "100%" }}>
    GitHub link:{" "}
    <a
      href="https://github.com/Abhinavhaz/expense"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "white",
        textDecoration: "underline",
        display: "block",
        marginTop: 4,
       color:" rgb(61, 188, 208)"
      }}
    >
     {github}
    </a>
   
  </Typography>
</CardContent>


      </Collapse>
    </Card>
  );
}
