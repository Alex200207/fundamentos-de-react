import React from 'react'
import Logo from '@images/logo.png'/*importamos el path que creamos*/

const Header = () => {
    return (
    <header>
        <div>Gestion de productos</div>
        <img src={Logo}/>
    </header>
    )
}

export default Header
/*componentes son piezas individuales del tablero*/