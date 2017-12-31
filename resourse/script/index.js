import _ from 'lodash';
import 'vue';
function component() {
   var element = document.createElement('div');

   element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to '
   ].join('\n\n');

   return element;
 }

 document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    // console.log('Accepting the updated printMe module!');
    // printMe();
  })
}
