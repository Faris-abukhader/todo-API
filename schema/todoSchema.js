const {
  createNewTodo,
  updateOneTodo,
  deleteOneTodo,
  deleteManyTodo,
  getOneTodo,
  getAllTodo,
} = require('../controller/todo')

const todoObj = {
  type:'object',
  properties:{
    id: {type:'string'},
    content: {type:'string'},
    priority: {type:'integer'},
    isDone: {type:'boolean'},
    createdAt: {type:'string'},
    lastUpdate: {type:'string'},  
  }
}

const createOneTodoSchema = {
    schema: {
        body: {
          type: 'object',
          required: ['content','priority','isDone'],
          properties:{
            content: {type:'string'},
            priority: {type:'integer'},
            isDone: {type:'boolean'},
          }
        },
        response:200
      },
      handler:createNewTodo
}

const updateOneTodoSchema = {
    schema: {
      params:{
        type: 'object',
        required:['id'],
        properties:{
          id: {type:'string'},
        }
      },
      body: {
        type: 'object',
        required: ['content','priority','isDone'],
        properties:{
          content: {type:'string'},
          priority: {type:'integer'},
          isDone: {type:'boolean'},
        }
      },
        response:200
      },
      handler:updateOneTodo
}


const deleteOneTodoSchema = {
  schema: {
    params:{
      type: 'object',
      required:['id'],
      properties:{
        id: {type:'string'},
      }
    },
    response:200
    },
    handler:deleteOneTodo
}

const deleteManyTodoSchema = {
  schema: {
    body:{
      type:'object',
      properties:{
        ids:{
          type:'array',
          items:{type:'string'}
        }
      }
    },
    response:200
    },
    handler:deleteManyTodo
}


const getOneTodoSchema = {
  schema: {
    params:{
      type: 'object',
      required:['id'],
      properties:{
        id: {type:'string'},
      }
    },
    response:{
      200:todoObj
    }
    },
    handler:getOneTodo
}


const getAllTodoSchema = {
  schema: {
    response:{
      200:{
        type:'array',
        items:todoObj  
      }
    }
    },
    handler:getAllTodo
}
 
 
 

module.exports = {
    createOneTodoSchema,
    updateOneTodoSchema,
    deleteOneTodoSchema,
    deleteManyTodoSchema,
    getOneTodoSchema,
    getAllTodoSchema,
}