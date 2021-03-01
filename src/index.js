import some from 'some.vue'

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'Изучить Javascript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Привет, Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Привет, Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'Овощи' },
            { id: 1, text: 'Сыр' },
            { id: 2, text: 'Что там ещё люди едят?' }
        ]
    }
})


var data = {
  a: 1
}

var Component = Vue.extend({
  data: function () {
    return { a: 1 }
  }
})

var vm = new Vue({
  data: {
    a: 1,
    e: {
      f: {
        g: 5
      }
    }
  },


  methods: {
    plus: function() {
      return this.a++
    }
  },

  computed: {
    aDouble: function() {
      return this.a * 2
    },
    aPlus: {
      get: function() {
        return this.a - 1
      },
      set: function(v) {
        this.a = v-1
      }
    }
  },

  watch: {
    a: function (val, oldVal) {
      console.log('новое значение: %s, старое значение: %s', val, oldVal)
    },
    e: [
      'handle1',
      function handle2 (val, oldVal) {
        //
      },
      {
        handler: function handle3 (val, oldVal) {
          //
        }
      }
    ]
  }
})
