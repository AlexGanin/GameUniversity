class Modal {

    constructor(data) {
        this.modal = _render(data)
        this.closing = false
        this.init()
    }

    init() {
        document.addEventListener('click', this.listener.bind(this))
        $btnRating.addEventListener('click', function() {
            modal.open()
        })
    }

    open() {
        !this.closing && this.modal.classList.add('open')
    }

    close() {
        this.closing = true
        this.modal.classList.add('hide')
        this.modal.classList.remove('open')
        setTimeout(() => {
            this.modal.classList.remove('hide')
            this.closing = false
        }, 300)
    }

    destroy() {
        this.modal.parentNode.removeChild(this.modal)
        removeEventListener('click', listener)
    }

    modal(data) {
        this.modal.querySelector('[data-content]').innerHTML = data
    }
    
    listener(event) {
        event.preventDefault
        if(event.target.dataset.close) {
            modal.close()
        }
    }
}

function _render(data) {
    $modal = document.createElement('div')
    $modal.classList.add('gmodal')
    $modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window">
            
            <div class="modal-header">
                <div class="modal-title">${data.title}</div>
                <div class="modal-x" data-close="true"></div>
            </div>
            <div class="modal-body" data-content>
                ${data.body}
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
    `)
    document.body.appendChild($modal)
    return $modal
}