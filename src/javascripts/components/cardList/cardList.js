import c from '../../helpers/data/colors';
import utilites from '../../helpers/utilities';
import './cardList.scss';

const cardListBuilder = () => {
  const colors = c.getColors();
  let domString = '';
  colors.forEach((color) => {
    domString += `
    <div class="col-3">
    <div class="card" style="background-color: #${color.hexValue}">
    <div class="card-body">
    <h5 class="card-title hide">${color.name}</h5>
    </div>
    </div>
    </div>
    `;
  });
  utilites.printToDom('color-list', domString);
};

export default { cardListBuilder };
