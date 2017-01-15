import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import { makeDOMDriver, h1 } from '@cycle/dom';


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