<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <h1>UserCrud</h1>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col cols="12">
                <v-data-table dense :headers="headers" :items="users" item-key="name" class="elevation-1"> </v-data-table>
                
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "UserCrud",
        data () {
            return {
                headers: [
                    {text: "Nome", value: "name"},
                    {text: "Localização", value: "location"}
                ],

                users: [
                    {id: 1, name: "Mateus", location: "Rio de Janeiro"},
                    {id: 2, name: "Lucas", location: "Campos dos Goytacazes"},
                ],
            }
        },
    }
</script>
