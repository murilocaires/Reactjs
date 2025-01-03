import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';



export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }
    
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }
    return(
        
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="./src/assets/profile.jpg" alt="" />
            
            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.autorAndTime}>
                            <strong>Murilo Caires</strong>
                            <time  title="27 de dezembro de 2024" dateTime="2024-12-27 - 16:38:50">Cerca de 1h atrás </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                                <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
               <footer>
                     <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                     </button>
               </footer>
            </div>
        </div>
    )
}