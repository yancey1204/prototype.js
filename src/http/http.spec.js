import { expect } from 'chai';
import { describe, it } from 'mocha';
import * as http from './http';

const root = 'http://jsonplaceholder.typicode.com';

describe('shared.http#get()', () => {
  it(`GET ${root}/posts/1`, () => {
    http.get(root)
      .then(response => JSON.stringify(response.body))
      .then((post) => {
        expect(post.id).to.equal(1);
      });
  });

  it(`GET ${root}/404`, () => {
    http.get(`${root}/404`)
      .then((response) => {
        expect(response.status).to.equal(404);
        return JSON.stringify(response.body);
      })
      .then((json) => {
        expect(json).to.equal({});
      });
  });
});

describe('shared.http#post()', () => {
  it(`POST ${root}/posts`, () => {
    http.post(`${root}/posts`)
      .then((response) => {
        expect(response.status).to.equal(201);
      });
  });
});

describe('shared.http#put()', () => {
  it(`PUT ${root}/posts/1`, () => {
    http.put(`${root}/posts/1`)
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
});

describe('shared.http#remove()', () => {
  it(`DELETE ${root}/posts/1`, () => {
    http.remove(`${root}/posts/1`)
      .then((response) => {
        expect(response.status).to.equal(204);
      });
  });
});
