Vue.component(
  'formulario',{
    template:"#form",
    props:['bike', 'cor', 'aro'],
    methods:{
      listarBikes(bike, cor, aro){
        this.$emit('bikes', bike, cor, aro)
      }
    }
  }
)

var app = new Vue({
          el: '#app',
          data() {
              return{

                bikes:[]
              }
          },
          methods: {
              listar(bike, cor, aro){
                  this.bikes.push({bike: bike, cor: cor, aro: aro})
              }
          }
      })
