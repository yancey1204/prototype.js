import xs from 'xstream';
import { Stream } from 'xstream';
import { run } from '@cycle/xstream-run';
import { div, label, hr, h1, input, makeDOMDriver } from '@cycle/dom';


function intent({DOM}) {
  const state$ = {
    username$: DOM.select('.field').events('input').map(ev => ev.target.value).startWith('')
  }
  return state$;
}

function model({username$}) {
  const state$ = username$.map(username => username ? `Hello ${username}` : 'Please enter your username');
  return state$;
}

function view(state$) {
  const vtree$ = state$.map(msg => div('form', [
    label('Username'),
    input('.field', {attrs: {type: 'text'}}),
    hr(),
    h1(msg),
  ]));
  return vtree$;
}

function main(src) {
  return { DOM: view(model(intent(src))) };
}

run(main, { 
  DOM: makeDOMDriver('#app') 
});