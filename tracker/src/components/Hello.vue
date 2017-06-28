<template>
  <div class="hello">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark">
          <el-table :data="matches" style="width: 100%">
            <el-table-column prop="formation" label="Formation" width="180">
            </el-table-column>
            <el-table-column prop="ownScore" label="Own">
            </el-table-column>
            <el-table-column prop="rivalScore" label="Rival">
            </el-table-column>
          </el-table>
        </div>
        <div>
          <el-button @click="addMatch" type="primary">Add Match</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import * as services from '../services'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      matches: [],
      test: ['hi', 'bye']
    }
  },
  created() {
    this.$services.match.on('created', match => {
      this.matches.push(match)
    })

    this.$services.match.find({
      query: {
        $limit: 100
      }
    }).then(page => {
      this.matches = page.data
    })
  },
  methods: {
    addMatch() {
      console.log('Clicked')
      this.$services.match.create({
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

.results {
  margin: 0 auto;
  padding: 10px;
  text-align: center;
}
</style>
