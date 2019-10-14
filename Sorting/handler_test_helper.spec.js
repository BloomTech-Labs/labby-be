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

  // test('postProject should return 200', async done => {
  //   const postResp = await app.postProject(null, null, (error, resp) => {
  //     expect(error).toBe(null)
  //     expect(resp).not.toBe(null)
  //     return resp
  //   })

  //   expect(postResp).not.toBe(undefined)
  //   done()
  // })

  // test('should return message ok', done => {
  //   request
  //     .get('/')
  //     .expect(200, (err, res) => {
  //       expect(res.body.message).toBe("ok")
  //       done()
  //     })
  // })

  // test('should get projects and return 400', async () => {
  //   let projects = await knex ("projects")
  //   request
  //     .get('/getallprojects') 
  //     .expect(400, (err, res) => {
  //       console.log("projects", projects)
  //       console.log("resStatus", res.status)
  //       expect(res.status).toBe(400)
  //       // expect (Array.isArray(res.body)).toBe(true)
  //       done()
  //     })
  // })

  // test('should get people', done => {
  //   console.log(done)
  //   request
  //     .get('/people') 
  //     .expect(200, (err, res) => {
  //       expect(res.status).toBe(200)

  //       // expect (Array.isArray(res.body)).toBe(true)
  //       done()
  //     })
  // })

  // test('should get roles', done => {
  //   console.log(done)
  //   request
  //     .get('/roles') 
  //     .expect(500, (err, res) => {
  //       expect(res.status).toBe(200)

  //       // expect (Array.isArray(res.body)).toBe(true)
  //       done()
  //     })
  // })
})