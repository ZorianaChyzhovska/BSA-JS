import { controls } from '../../constants/controls';
import { createFightersSelector } from './fighterSelector';
import { fighterService } from './services/fightersService';
import { createElement} from '../helpers';
import { createFighters } from './components/fightersView';


class Fighter {
    
    createProperty(keyValue) {
        const nameElement = createElement({ tagName: 'span', className: 'fighter-preview___property' });
        nameElement.innerText = keyValue.join(': ').replace(/(\w+):/, subStr => subStr.toUpperCase());
      
        return nameElement;
      }
    
    createPreviewImage(source) {
        const attributes = { src: source };
        const imgElement = createElement({
          tagName: 'img',
          className: 'fighter-image___preview',
          attributes
        });
    
        if(position === 'right') {
          imgElement.style.transform = 'scale(-1, 1)';
        }
      
        return imgElement;
      }
    
      if(fighter) {
        const keyValueArrayOfObject = Object.entries(fighter);
        fighterElement.append(createPreviewImage(fighter['source']));
        keyValueArrayOfObject
        .filter(keyValueAll => keyValueAll[0] !== '_id' && keyValueAll[0] !== 'source')
        .forEach(keyValue => fighterElement.append(createProperty(keyValue)));
      }
    
    
}

export const fighter = new Fighter();