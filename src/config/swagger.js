const swaggerJsDoc = {
  openapi: "3.0.0",
  info: {
    title: "Smart ToDo API",
    version: "1.0.0",
    description: "A professional task management REST API"
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local server"
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  paths: {
    "/auth/register": {
      post: {
        summary: "Register a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                name: "Arjun",
                email: "arjun@gmail.com",
                password: "password123"
              }
            }
          }
        },
        responses: {
          201: { description: "User registered successfully" }
        }
      }
    },
    "/auth/login": {
      post: {
        summary: "Login user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                email: "arjun@gmail.com",
                password: "password123"
              }
            }
          }
        },
        responses: {
          200: { description: "JWT token returned" }
        }
      }
    },
    "/tasks": {
      get: {
        summary: "Get all tasks",
        responses: {
          200: { description: "List of tasks" }
        }
      },
      post: {
        summary: "Create a task",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                title: "Complete Assignment",
                description: "Finish backend project",
                priority: "high",
                status: "pending",
                dueDate: "2026-01-10"
              }
            }
          }
        },
        responses: {
          201: { description: "Task created" }
        }
      }
    }
  }
};

module.exports = swaggerJsDoc;