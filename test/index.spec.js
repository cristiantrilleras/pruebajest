import app from '../src/app'
import request from 'supertest'

describe('GET / tasks', () => {

  test('should respond with a 200 status code', async () => {
     const response = await request(app).get('/tasks').send()
     expect(response.statusCode).toBe(200);
  })

  test('should respond with an array', async () => {
    const response = await request(app).get('/tasks').send();
    expect(response.body).toBeInstanceOf(Array)
  })


})

describe('POST /tasks', () => {

//200status

test('should respond with a 200 status code', async () => { 
  const response = await request(app).post('/tasks').send()
  expect(response.statusCode).toBe(200)
})

// respond with content type of aplication json

test('should have a content-tyoe : application/json in header', async () => {
const response= await request (app).post("/tasks").send();
expect(response.headers['content-type']).toEqual(
  expect.stringContaining("json")); 
})

// should respond with a json object containing the new task with an id

test("should respond with a task ID", async () => {
  const response= await request(app).post("/tasks").send({
    title: "test task",
    description: "test description",
  });
  expect(response.body.id).toBeDefined();
})
 

})