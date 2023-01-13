import React from 'react';
import { useState } from 'react';
import './collapse.scss'
//import arrow_close from '../../assets/images/arrow_down.svg'


const Collapse = ({ title, arrow }) => {
    //const [open, setopen] = useState(false);


    return (

        <div className='Collapse'>
            <button className='Collapse__button'>{title}</button>
            <img src={arrow} alt='fleche'></img>
        </div>


        // <div className='Collapse'>
        //     <p>{title}</p>
        //     <img src={arrow} alt='fleche'></img>

        // </div>
    );
};

export default Collapse;

// function ButtonCollapse({ arrowToggle, title }) {
//     return (
//         <div className='Collapse'>
//             <Button onClick={arrowToggle}>
//                 {title}
//             </Button>
//             {/* <img src={arrow} alt='fleche'></img> */}

//         </div>
//     );
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     )
// }