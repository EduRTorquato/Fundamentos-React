import React from "react"
import './index.css'
import './App.css'

import Primeiro from './components/Primeiro'
import ComFilhos from './components/ComFilhos' 
import Card from './components/layout/Card'
import Repeticao from "./components/layout/Repeticao"
import Condicional from "./components/layout/Condicional"




export default (props) => (
    <div className="App">
        <Card titulo="Componente com parametro">
            <Primeiro></Primeiro>
            
        </Card>
        <Card titulo="Segundo componente">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="Componente com filhos">
        <ComFilhos className="REPETICAO">
            <Repeticao></Repeticao>
        </ComFilhos>
        </Card>

        <Card titulo="Condicionais">
            <Condicional numero={5}></Condicional>
        </Card>
       

    
          {/*<Primeiro></Primeiro>
          <ComParametro titulo="Thats the title"
          subtitulo="Thats the subtitle"/>
          <ComParametro titulo="Opa"
          subtitulo="Epa"/> */}
    </div>
)