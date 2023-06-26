import React from 'react';
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteIcon from '@mui/icons-material/Favorite'; // Coração preenchido
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Coração não preenchido
import { red } from '@mui/material/colors'; // Importe da cor vermelho
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"; // Save não preenchido
import BookmarkIcon from '@mui/icons-material/Bookmark'; // Save preenchido
import { useState } from 'react';

function Post({user, postImage, likes, timestamp}) {

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    
    const[isSave, setIsSave] = useState(false);

    const handleSaveClick = () => {
        setIsSave(!isSave);
    }

  return (
    <div className="post">
        <div className="post__header">
            <div className="post__headerAuthor">
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            {user} • <span>{timestamp}</span>
            </div>
            <MoreHorizIcon/>
        </div>

        <div className="post__image">
            <img src={postImage} alt=""/>
        </div>
        <div className="post__footer">
            <div className="post__footerIcons">
                <div className="post_iconsMain">
                {isLiked ? (<FavoriteIcon sx={{ color: red[500] }} onClick={handleLikeClick} />) : (<FavoriteBorderIcon onClick={handleLikeClick} />)}
                    <ChatBubbleOutlineIcon className="postIcon"/>
                    <TelegramIcon className="postIcon"/>
                </div>
                <div className="post_iconsSave"></div>
                {isSave ? (<BookmarkIcon onClick={handleSaveClick}/>) : (<BookmarkBorderIcon onClick={handleSaveClick}/>)}
            </div>
            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post