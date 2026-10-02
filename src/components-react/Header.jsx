import logoImg from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="header">
        
        <img 
            className="header__logo" 
            src={logoImg} 
            alt="Fylo empresarial logo" 
        />

        <nav className="header__menu">
            <ul className="header__items">
                <li className="header__item">
                    <a className="header__link" href="#">Features</a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">Team</a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">Sing In</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
