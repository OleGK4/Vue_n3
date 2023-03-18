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

Vue.component('column-planned-tasks', {
    props: {
        cardList: [],
    },
    template: `
    <div class="col">
        <card-form class="column"
            v-for="card in cardList"
            :card="card"
            :MoveCard="MoveCard"
            :del="true">
        </card-form>
    </div>
    `,
    methods: {
        MoveCard(card) {
            eventBus.$emit('MoveToTwo', card)
            this.cardList.splice(this.cardList.indexOf(card), 1);
        }
    }
})

Vue.component('column-tasks-work', {
    props: {
        cardList: [],
    },
    template: `
    <div class="col">
        <card-form class="column"
            v-for="card in cardList"
            :card="card"
            :MoveCard="MoveCard">
        </card-form>
    </div>
    `,
    methods: {
        MoveCard(card) {
            eventBus.$emit('MoveToThree', card);
            this.cardList.splice(this.cardList.indexOf(card), 1);
        }
    }
})



let app = new Vue({
    el: '#app',
    data(){
        return{

        }
    }

})