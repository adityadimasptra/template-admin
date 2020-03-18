<template>
  <div id="dashboard" class="my-4 mx-4">
    <h2 class="subheading grey--text">Dashboard</h2>

    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase" right>By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase" right>By person</span>
            </v-btn>
          </template>
          <span>Sort projects by project person</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('status')" v-on="on">
              <v-icon left small>done</v-icon>
              <span class="caption text-lowercase" right>By status</span>
            </v-btn>
          </template>
          <span>Sort projects by project status</span>
        </v-tooltip>
      </v-row>

      <v-card
        flat
        v-for="(project, index) in projects"
        :key="index"
        class="mb-2"
      >
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col lg="6" md="12" sm="12" cols="12">
            <div class="caption">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col lg="2" md="4" sm="6" cols="12">
            <div class="caption">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col lg="2" md="4" sm="6" cols="12">
            <div class="caption">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col lg="2" md="4" sm="12" cols="12">
            <div>
              <v-chip
                small
                :class="`${project.status} white--text caption mt-5`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a websites",
          person: "Aditya Dimas Saputra",
          due: "20 April 2020",
          status: "completed",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, minus iusto autem odio id alias labore fugiat consequatur, officiis vel, commodi distinctio quaerat numquam consectetur dicta consequuntur sed saepe dignissimos."
        },
        {
          title: "Get API from AXIOS Zonasea",
          person: "Puji Rahayu",
          due: "29 MARET 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, minus iusto autem odio id alias labore fugiat consequatur, officiis vel, commodi distinctio quaerat numquam consectetur dicta consequuntur sed saepe dignissimos."
        },
        {
          title: "Create a website e-commerce",
          person: "Aviona Putri Adji",
          due: "28 September 2020",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, minus iusto autem odio id alias labore fugiat consequatur, officiis vel, commodi distinctio quaerat numquam consectetur dicta consequuntur sed saepe dignissimos."
        },
        {
          title: "Build a database MySQL",
          person: "Alfan Putra Adji",
          due: "08 Desember 2020",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, minus iusto autem odio id alias labore fugiat consequatur, officiis vel, commodi distinctio quaerat numquam consectetur dicta consequuntur sed saepe dignissimos."
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style lang="scss">
.project.completed {
  border-left: 15px solid #4caf50 !important;
}
.project.ongoing {
  border-left: 15px solid orange !important;
}
.project.overdue {
  border-left: 15px solid tomato !important;
}
.v-chip.completed {
  background-color: #4caf50 !important;
}
.v-chip.ongoing {
  background-color: orange !important;
}
.v-chip.overdue {
  background-color: tomato !important;
}
</style>
