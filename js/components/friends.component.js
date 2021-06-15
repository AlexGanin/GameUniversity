class Friends extends Component {
    
    constructor(id) {
        super(id)
    }

    init() {

        const friendsNum = 20
        this.$friends = this.$el.querySelector('#friends')
        this.$arrowLeft = this.$el.querySelector('#arrow-left')
        this.$arrowRight = this.$el.querySelector('#arrow-right')
        this.scrollStep = 60
        
        this.$arrowLeft.addEventListener('click', _arrowLeft.bind(this))
        this.$arrowRight.addEventListener('click', _arrowRight.bind(this))
        this.$friends.insertAdjacentHTML('afterbegin', _addButton())

        for(var i = 0; i < friendsNum; i++) {
            let user = state.friends[i]
            if(user) 
                this.$friends.insertAdjacentHTML('beforeend', _addUser(user))
            else 
                this.$friends.insertAdjacentHTML('beforeend', _addEmpty())
        }
    }
}

function _addButton() {
    return `
        <div class="item iuser iplus" title="Добавить нового пользователя">
            <div class="user"></div>
            <div class="plus"></div>
        </div>
    `
}

function _addUser(item) {
    return `
        <div class="item iuser" title="${item.lastName + ' ' + item.name}">
            <div class="user"></div>
        </div>
    `
}

function _addEmpty() {
    return `
        <div class="item">                  
        
        </div>
    `
}

function _arrowLeft() {
    let myTrue = false
    this.$arrowLeft.setAttribute('disabled', true)
    this.$friends.scroll({
        left: this.$friends.scrollLeft - this.scrollStep,
        behavior: 'smooth'
    })
    this.$friends.addEventListener('scroll', event => {
        if(event.target.scrollLeft % this.scrollStep === 0 && myTrue === false) {
            myTrue = true
            this.$arrowLeft.removeAttribute('disabled')
        }
    })
    
}

function _arrowRight() {
    let myTrue = false
    this.$arrowRight.setAttribute('disabled', true)
    this.$friends.scroll({
        left: this.$friends.scrollLeft + this.scrollStep,
        behavior: 'smooth'
    })
    this.$friends.addEventListener('scroll', event => {
        if(event.target.scrollLeft % this.scrollStep === 0 && myTrue === false) {
            myTrue = true
            this.$arrowRight.removeAttribute('disabled')
        }
    })
}
    
    