import React  from "react";
import If from './condicionalComIf'

export default props =>{

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            <If test={ props.numero % 2 == 0}>
                <span>Par</span>
            </If>
            <If test={ props.numero % 2 == 1}>
                <span>ímpar</span>
            </If>
            { props.numero % 2 == 0 ?  <span>Par</span> : <span>Impar</span> }
           
            
        </div>

    )

}