<template>
    <v-data-table
        :headers="headers"
        :items="users"
        sort-by="nome"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>My CRUD</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-dialog v-model="dialog" max-width="700px">
                    <template v-slot:activator="{on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">Novo Item</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                    v-model="editedItem.id"
                                    label="Id"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="8">
                                    <v-text-field
                                    v-model="editedItem.name"
                                    label="Nome"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                    v-model="editedItem.location"
                                    label="Localização"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                    v-model="editedItem.teste"
                                    label="Diaria"
                                    ></v-text-field>
                                </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
                            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template> 

    <template v-slot:item>
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>

    </v-data-table>
</template>

<script>
import axios from "axios";
export default {
  name: "UserCrud",
  data: () => ({
    dialog: false,
    headers: [
      { text: "Id", value: "id" },
      { text: "Nome", value: "name" },
      { text: "Localização", value: "location" },
      { text: "Diaria", value: "diaria" },
    ],
    users: [{ id: "", name: "", location: "", diaria: "" }],
    editedIndex: -1,
    editedItem: {
        id: 0,
        name: "",
        location: "",
        diaria:"",
    },
    defaultItem: {
        id: "",
        name: "",
        diaria: "",
        location: "",
    },
  }),
  methods: {
    inicializa() {
      axios("http://localhost:3000/users")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => console.log(error));
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        //alteracao
        axios
          .put(
            "http://localhost:3000/users/" + this.editedIndex.id,
            this.editedItem
          )
          .then((response) => {
            console.log(response);
            Object.assign(this.users[this.editedIndex], this.editedItem);
            this.close;
          })
          .catch((error) => console.log(error));
      } else {
        //Inclusao
        axios
          .post("http://localhost:3000/users", this.editedItem)
          .then((response) => {
            console.log(response);
            this.users.push(this.editedItem);
            this.close();
          })
          .catch((error) => console.log(error));
      }
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.users.indexOf(item);
      confirm("Deseja apagar este item?") &&
        axios
          .delete("http://localhost:3000/users/" + item.id)
          .then((response) => {
            console.log(response.data);
            this.users.splice(index, 1);
          })
          .catch((error) => console.log(error));
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Editar Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.inicializa();
  },
};
</script>

<style scoped>
</style>