let eventBus = new Vue()

Vue.component('columns',{

    template: `
<div class="list-notes">
    <div class="row-col">
    <create-card></create-card>
        <column-planned-tasks :cardList="cardsOne"></column-planned-tasks>
        <column-tasks-work :cardList="cardsTwo"></column-tasks-work>
        <column-testing :cardList="cardsThree"></column-testing>
        <column-completed-tasks :cardList="cardsFour"></column-completed-tasks>
    </div>
</div>
`,
    data() {
        return {
            cardsOne: [],
            cardsTwo: [],
            cardsThree: [],
            cardsFour: []
        }
    },
    mounted() {
        eventBus.$on('card-submitted', card => {
            this.cardsOne.push(card)
        })
        eventBus.$on('MoveToTwo', card => {
            this.cardsTwo.push(card)
        })

        eventBus.$on('MoveToThree', card => {
            this.cardsThree.push(card)
        })

        eventBus.$on('MoveToFour', card => {
            this.cardsFour.push(card)
        })
        eventBus.$on('DeleteCard', card => {
            this.cardsOne.splice(this.cardsOne.indexOf(card), 1);
        })
    },

})



let app = new Vue({
    el: '#app',
    data(){
        return{

        }
    }

})