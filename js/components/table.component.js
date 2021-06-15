class Table extends Component {

    constructor(id) {
        super(id)
    }

    init() {
        this.num = 0
    }

    createTableString(data) {
        const myClass = state.friends.filter(i => i.id == data.id).length > 0 ? 'active' : ''
        this.num+=1
        return `
            <div class="table table-td ${myClass}">
                <div class="number">${this.num}</div>
                <div class="img"></div>
                <div class="name">${data.lastName} ${data.name}</div>
                <div class="score">${data.points}</div>
            </div>
        `
    }
    
    createTableStringHeader() {
        return `
            <div class="table table-th">
                <div class="number">Место</div>
                <div class="no-img"></div>
                <div class="name">Имя Фамилия</div>
                <div class="score">Опыт</div>
            </div>
        `
    }
}
