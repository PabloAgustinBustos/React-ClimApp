import s from "../styles/Button.module.css";

const Button = ({txt, onClose, type}) => {
    if(type === "close"){
        return(<button className={s.close} onClick={onClose}>{txt}</button>)
    }else if(type === "search"){
        return(<button className={s.search}>{txt}</button>)
    }
}

export default Button