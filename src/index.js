import xs from 'xstream';
import { Stream } from 'xstream';
import { run } from '@cycle/xstream-run';
import { div, label, hr, h1, input, makeDOMDriver } from '@cycle/dom';


function main() {
  const sinks = {
    DOM: xs.periodic(1000).map(index => h1(`${index} seconds elapsed`))
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);