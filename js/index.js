new Friends('block-friends')
new Way()

state.rating.sort(function (a, b) {
    return b.points - a.points
})
const table = new Table()

const html = state.rating.map(function(user) {
    return table.createTableString(user)
}).join('')

const modal = new Modal({
    title: 'Рейтинг игроков',
    closable: true,
    body: `
        ${table.createTableStringHeader()}
        <div id="rating-scroll">
            ${html}
        </div>
    `   
})
