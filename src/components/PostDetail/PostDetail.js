
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const PostDetail = () => {
    let { id } = useParams();
  const [post, setPost] = useState({});
  const { title, body } = post;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  const [images, setImages] = useState([]);


  useEffect(() => {
    const url = `https://loremflickr.com/600/400?random=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [id]);

  const postStyle = {
    border:'1px solid gray',
    margin:'20px',
    padding:'20px',
    borderRadius:'10px'
}


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


  const classes = useStyles();



    return (
        <div>
        <div style={postStyle}>
        <h1>Id: {id}</h1>
        <h2>Title: {title}</h2>
        <h3>Description: {body}</h3>
      </div>
  
      <div>
           
  
           {
                  comments.map(comment => 
                    
                    <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={`https://loremflickr.com/600/400?random=${id}`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {comment.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {comment.body}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                    
                    )
           }
      </div>  

        </div>
    );
};

export default PostDetail;