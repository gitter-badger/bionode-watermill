'use strict'

// === WATERMILL ===
const {
  task,
  join,
  junction,
  fork
} = require('../../..')

const task0 = task({name: 'task0'}, () => `echo "something0"`)

const task1 = task({name: 'task1'}, () => `echo "something1"`)

const task2 = task({name: 'task2'}, () => `echo "something2"`)

const task3 = task({name: 'task3'}, () => `echo "something3"`)

const task4 = task({name: 'task4'}, () => `echo "something4"`)

const task5 = task({name: 'task5'}, () => `echo "something5"`)

const task6 = task({name: 'task6'}, () => `echo "something6"`)

const pipeline = join(
  task1,
  fork(
    join(
      task2,
      fork(task4, task5)
    ),
    join(task3,
      fork(task4, task5)
    )
  )
)

pipeline()
