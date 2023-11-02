'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const { UserModel, ArticleModel, sequelize } = require('../lib/models');
const request = supertest(server.app);

let testUser = null;
let testArticle = null;

beforeAll(async () => {
  await sequelize.sync();
});
beforeEach(async () => {
  testUser = await UserModel.create({
    username:'user',
    password: 'test',
    role: 'admin'
  });
  testArticle = await ArticleModel.create({
    name: 'test',
    text: 'test'
  });
});
afterEach(async() => {
  await UserModel.destroy({ where: {}, truncate: true });
  await ArticleModel.destroy({ where: {}, truncate: true });
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Server requests', () => {
  test('Get Articles', async () => {
    let response = await request.get('/article').set({ authorization: `bearer ${testUser.token}`});
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
  });
  test('Create Articles', async () => {
    let response = await request.post('/article')
      .set({ authorization: `bearer ${testUser.token}` })
      .send({ name: 'Article 1', text: 'My very first article'});
    expect(response.status).toEqual(201);
    expect(response.body).toBeTruthy();
    expect(response.body.name).toEqual('Article 1');
    expect(response.body.text).toEqual('My very first article');
  });
  test('Get one Article', async () => {
    let response = await request.get(`/article/${testArticle.id}`).set({ authorization: `bearer ${testUser.token}` });
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
    expect(response.body.name).toEqual('test');
    expect(response.body.text).toEqual('test');
  });
  test('Update an article', async () => {
    let response = await request.put(`/article/${testArticle.id}`)
      .set({ authorization: `bearer ${testUser.token}` })
      .send({ text: 'I changed my mind' });
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
    expect(response.body.name).toEqual('test');
    expect(response.body.text).toEqual('I changed my mind');
  });
  test('Delete one Article', async () => {
    let response = await request.delete(`/article/${testArticle.id}`).set({ authorization: `bearer ${testUser.token}` });
    expect(response.status).toEqual(204);
  });
});
