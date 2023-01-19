import React from 'react';
import * as C from './style';

const Header = () => {
  return (
    <>
        <C.Container>
            <C.Header>
                <C.Title><h3 className='TitlePrincipal'>App de Controle Financeiro</h3></C.Title>
            </C.Header>
        </C.Container>
    </>
    
  )
}

export default Header;