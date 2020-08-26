import Navbar from '../components/navbar'
import { ExternalLink } from 'react-external-link'


export default function Adulting101() {
  return (
    <div className="adulting101">
      <Navbar />
      <h1 className="projectTitles">Adulting 101: Dinner Party Edition</h1>
      <p className="description">This is a full-stack web application created using Nodejs. Users can choose ingredients they would like to use from home
         in order to create custom menus. The application uses the RecipePuppy API (recipepuppy.com/about/api/) in order to pull 
         recipes from the web. Each custom made menu includes the name of the recipe, an image and a link to the external site where 
         the recipe is hosted. Users can favorite recipes and menus, as well as edit recipe names and menu names. Enjoy!</p>
      <h3 className="projectTitles">Tech Stack:</h3>
      <ul className="description">
        <li>Nodejs</li>
        <li>Axios</li>
        <li>Sequelize</li>
        <li>Express</li>
        <li>Express EJS Layouts</li>
        <li>Javascript</li>
        <li>CSS</li>
      </ul>
      <h4 className="projectTitles">App:</h4>
      <ExternalLink className="links" href="https://adulting101-dinnerpartyedition.herokuapp.com/"></ExternalLink>
      <h4 className="projectTitles">ReadMe:</h4>
      <ExternalLink className="links" href="https://github.com/codesmith888/Adulting-101_Dinner_Party_Edition"></ExternalLink>
      <div>
        <footer className="footer">
          <p>Created by ©CodeSmith888</p>
        </footer>
      </div>
    </div>
  )
}