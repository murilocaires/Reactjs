import styles from './Avatar.module.css';

export function Avatar({hasBorder=true, src}){
    
    return(
        //const hasBorder = props.hasBorder != false;
        <img className={ hasBorder ? styles.avatarWithBorder: styles.avatar} src={src} />
    );
}