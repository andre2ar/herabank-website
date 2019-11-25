import React from 'react';

import classes from './CopyRight.module.css';

const CopyRight = () => (
    <div className={classes.CopyRight}>
        <p>&copy; {new Date().getFullYear()} Hera Bank Banco de ativos digitais</p>

        <small>Todos os direitos reservados</small>
    </div>
);

export default CopyRight;