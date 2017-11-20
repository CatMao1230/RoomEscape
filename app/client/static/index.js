let countDownHtml = (number, text) => {
    return `
    <div class='two wide column row'>
      <span class='halo'>
        <h1 class='ui inverted header'>
          ${number}
          <div class='sub header'>
            ${text}
          </div>
        </h1>
      </span>
    </div>
    `
}

$('#count-down').countdown('2018/04/30', function (event) {
    let $this = $(this).html(event.strftime(`
        <div class='ui center aligned grid'>
          ${countDownHtml('%D', 'Days')}
          ${countDownHtml('%H', 'Hours')}
          ${countDownHtml('%M', 'Minutes')}
          ${countDownHtml('%S', 'Seconds')}
        </div>`
    ))
})