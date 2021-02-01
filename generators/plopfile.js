module.exports = function (plop) {
  plop.setGenerator('screen', {
    description: 'application screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'screen name?'
      },
      {
        type: 'input',
        name: 'isDummy',
        message: 'is dummy screen? [y, n]'
      }
    ],
    actions: function (data) {

      if (data.isDummy === 'y') {
        return [
          {
            type: 'add',
            path: '../src/ui/screens/{{dashCase name}}/{{camelCase name}}.screen.js',
            templateFile: 'templates/screen/dummyScreen.js.hbs'
          },
          {
            type: 'add',
            path: '../src/ui/screens/{{dashCase name}}/{{camelCase name}}.styles.js',
            templateFile: 'templates/screen/styles.js.hbs'
          },
        ]
      }
      return [
        {
          type: 'add',
          path: '../src/ui/screens/{{dashCase name}}/{{camelCase name}}.screen.js',
          templateFile: 'templates/screen/screen.js.hbs'
        },
        {
          type: 'add',
          path: '../src/ui/screens/{{dashCase name}}/{{camelCase name}}.styles.js',
          templateFile: 'templates/screen/styles.js.hbs'
        },
        {
          type: 'add',
          path: '../src/ui/screens/{{dashCase name}}/{{camelCase name}}.map.js',
          templateFile: 'templates/screen/map.js.hbs'
        },
        {
          type: 'add',
          path: '../src/store/ducks/{{dashCase name}}/{{camelCase name}}.ducks.js',
          templateFile: 'templates/duck/duck.js.hbs'
        },
        {
          type: 'add',
          path: '../src/store/sagas/{{dashCase name}}/{{camelCase name}}.sagas.js',
          templateFile: 'templates/saga/saga.js.hbs'
        },
      ]
    }
  })
  plop.setGenerator('component', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/ui/components/{{dashCase name}}/{{camelCase name}}.component.js',
        templateFile: 'templates/component/component.js.hbs'
      },
      {
        type: 'add',
        path: '../src/ui/components/{{dashCase name}}/{{camelCase name}}.styles.js',
        templateFile: 'templates/component/styles.js.hbs'
      },
    ]
  })
}