const app = require('./handler')
const supertest = require('supertest')


describe('handler_test_helper Get calls', () => {
  let request
  beforeEach(() => {
    request = supertest()
  })

  test('getAllProjects should return 200', async done => {
    const projectsResp = await app.getAllProjects(null, null, (error, resp) => {
      expect(error).toBe(null)
      expect(resp.statusCode).toBe(200)
      return resp
    })

    expect(projectsResp).not.toBe(undefined)
    expect(projectsResp.statusCode).toBe(200);
    done()
  })

