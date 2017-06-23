<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>
      <ul>
        {{ matches.length }}
        <li v-for="value in matches" :key="value.id">
          {{ value.formation }} :
          <b>{{value.ownScore}} - {{value.rivalScore}}</b>
        </li>
      </ul>
    </div>
    <button @click="addMatch">Add Match</button>
  </div>
</template>

<script>
import * as services from '../services'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      matches: [],
      test: ['hi', 'bye']
    }
  },
  created () {
    services.match.on('created', match => {
      this.matches.push(match)
    })

    services.match.find({
      query: {
        $limit: 100
      }
    }).then(page => {
      this.matches = page.data
    })
  },
  methods: {
    addMatch () {
      console.log('Clicked')
      services.match.create({
        formation: '4-1-2-1-2',
        ownScore: 4,
        rivalScore: 2
      })
      this.getMatches
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
