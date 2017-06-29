<template>
  <div class="hello">
    <div class="columns">
      <div class="column is-two-thirds box">
        <h3>Last Played Matches</h3>
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
        <button class="button is-danger" @click="deleteLastMatch">Delete last Match</button>
      </div>
      <div class="column box">
        <h3>Log a New Match</h3>
        <div class="field">
          <label class="label">Formation</label>
          <p class="control" style="text-align: center;">
            <span class="select">
              <select v-model="newMatch.formation">
                <option>4-1-2-1-2</option>
                <option>4-3-2-1</option>
              </select>
            </span>
          </p>
        </div>
        <div class="columns is-mobile">
          <div class="column is-half">
            <div class="field">
                <label class="label">Own Score</label>
                <p class="control">
                  <input v-model="newMatch.ownScore" class="input" type="text" placeholder="Text input">
                </p>
              </div>
          </div>
          <div class="column">
            <div class="field">
                <label class="label">Rival Score</label>
                <p class="control">
                  <input v-model="newMatch.rivalScore" class="input" type="text" placeholder="Text input">
                </p>
              </div>
          </div>
        </div>
        <button class="button is-primary" @click="addMatch">Add a new Match</button>
      </div>
    </div>
  </div>
</template>

<script>
// import * as services from '../services'

export default {
  name: 'dashboard',
  data() {
    return {
      columns: ['Formation', 'Own Score', 'Rival Score'],
      matches: [],
      isSel: false,
      newMatch: {
        formation: '4-1-2-1-2',
        ownScore: 0,
        rivalScore: 0
      }
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
    addMatch(e) {
      e.preventDefault()
      this.$services.match.create(this.newMatch)
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
form {
  padding: 30px;
}

.hello {
  padding-top: 50px;
  margin: 0 30px 0 30px;
}
.box {
  padding: 30px;
  margin: 10px 10px; 
}
</style>
