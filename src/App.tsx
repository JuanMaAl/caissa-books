import './App.css'
import ButtonComponent from './components/ButtonComponent';


function App() {

  return (
    <>
      <h1>Caissa Books</h1>
      <h3>Administración de listas de libros de ajedrez</h3>
      <ButtonComponent buttonName="A Leer"/>
      <ButtonComponent buttonName='Deseados' />
      <ButtonComponent buttonName='Leídos' />
      <br></br>
      <h3>Lista de libros para Leer</h3>
      <table>
        <tr>
          <th>Título</th>
          <th>Editorial</th>
          <th>Autor</th>
          <th>Marcar como leído</th>
          <th>Borrar de la lista</th>
        </tr>
        <tr>
          <td>Mis geniales Predecesores</td>
          <td>Everyman chess</td>
          <td>Gary Kasparov</td>
          <td><ButtonComponent buttonName='&#10004;' /></td>
          <td><ButtonComponent buttonName='X' /></td>
        </tr>
      </table>
    </>
  )
}

export default App
