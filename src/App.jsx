import './App.css'
import Header from './Header'
import MenuItem from './MenuItem'
import BarSide from './BarSide'
import BarItem from './BarItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const fontDocsList = [
  {name:"exemplo.txt"}, 
  {name:"entrevista.txt"}, 
  {name:"observacao.txt"}
]

function App() {
    return (
      <div className='container'>
        <Header >
           <MenuItem title='Novo Projeto' />
           <MenuItem title='Importar Fonte' />
           <MenuItem title='Codificacao Aberta' />
           <MenuItem title='Codificacao Axial ' />
        </Header>

        <BarSide title="Fontes">
          {
            fontDocsList.map(function(item){
              return(
                <BarItem title={item.name}>
                    <FontAwesomeIcon icon={faFileLines} />
                </BarItem>
              )
            })
          }
        </BarSide>
        </div>
    )
}

export default App
