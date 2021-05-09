(function () {
  'use strict'

  angular.module('myApp', [])
    .config(function ($interpolateProvider) {
      $interpolateProvider.startSymbol('//')
      $interpolateProvider.endSymbol('//')
    })

    .controller('MainController', function () {
      const vm = this
      vm.title = 'My first ng'

      const $projTitle = $('.projFormat>h3')
      const $projBtn = $('.projContent>a>button')
      const $root = $('html, body')

      const color = ['brown', 'limegreen', 'orange', 'purple', 'black', 'yellow']

      setInterval(function () {
        const num = Math.floor(Math.random() * color.length)
        $projTitle.css({
          color: color[num],
          'transition-duration': '3s'
        })
        $projBtn.css({
          color: color[num],
          'transition-duration': '3s'
        })
      }, 3000)

      $(document).on('click', '#navLinkItems>ul>li>a', function (event) {
        event.preventDefault()

        $root.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000)
      })
    })
})()
