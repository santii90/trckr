<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th v-for="key in columns" v-bind:key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="key in matches" :id="key._id" @click="selectMatch" v-bind:key="key" v-bind:class="{ 'is-selected': isSel }">
          <th>{{ key.formation }}</th>
          <td>{{ key.ownScore }}</td>
          <td>{{ key.rivalScore }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button class="button is-primary" @click="addMatch">Add a new Match</button>
      <button class="button is-danger" @click="deleteLastMatch">Delete last Match</button>
    </div>
  </div>
</template>

<script>
// import * as services from '../services'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      columns: ['Formation', 'Own Score', 'Rival Score'],
      matches: [],
      test: ['hi', 'bye'],
      isSel: false
    }
  },
  created() {
    this.$services.match.on('created', match => {
      this.matches.push(match)
    })
    this.getMatches()
  },
  methods: {
    getMatches() {
      this.$services.match.find({
        query: {
          $limit: 100
        }
      }).then(page => {
        this.matches = page.data
      })
    },
    addMatch() {
      console.log('Clicked')
      this.$services.match.create({
        formation: '4-1-2-1-2',
        ownScore: 4,
        rivalScore: 2
      })
      this.getMatches
    },
    selectMatch() {
      this.isSel = !this.isSel
    },
    deleteLastMatch() {
      var id = document.getElementsByClassName('is-selected')[0].getAttribute('id')
      this.$services.match.remove(id).then(this.getMatches)
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

.table {
  width: 800px;
  margin: 30px auto;
  padding: 10px;
  text-align: center;
}
</style>
