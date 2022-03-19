/*!
 * jQuery serialflex
 * https://github.com/kevinmeunier/jquery-serialflex
 *
 * Copyright 2022 Meunier Kévin
 * https://www.meunierkevin.com
 *
 * Released under the MIT license
 */
;(function($){
  'use strict';

  const $window = $(window);
  let array = {};
  let resizeTimeout;

  $.fn.serialflex = function(options){
    const settings = $.extend({}, $.fn.serialflex.defaults, options);
    const callback = function(){ init = true; };
    const base = this;
    let init = false;

    $.extend(this, {
      init: function(){
        // Grouping elements by data-serialflex value
        this.each(function(){
          const $this = $(this);
          const index = $this.data('serialflex');
          let $stack = array[index] || $([]);

          array[index] = $stack.add($this);
        });

        // Updading the positions on resize
        $window.on('resize.serialflex', function(){
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(function(){
            base.resize();
          }, 100);
        });

        // Manual trigger on page load
        base[settings.forceRefresh ? 'refresh' : 'resize'](callback);
      },

      refresh: function(callback){
        let i = 0;
        const resizeInterval = setInterval(function(){
          if (i == 10) {
            clearInterval(resizeInterval);
            callback();
          } else {
            i++;
            base.resize();
          }
        }, 50);
      },

      resize: function(callback){
        $.each(array, function(index, $stack){
          // Creation of an array for the offset positions
          let offetTop = $stack.map(function(){
            return $(this).offset().top;
          }).get();

          let start = 0;
          for (let i = 0; i <= offetTop.length; i++){
            if( offetTop[start] != offetTop[i] ){
              // Updating the heights
              base.adjustHeight($stack.slice(start, i));

              // Updating the positions (as heights changed)
              offetTop = $stack.map(function(){
                return $(this).offset().top;
              }).get();

              // Updating the start value
              start = i;
            }
          }
        });

        if( callback )
          callback();
      },

      adjustHeight: function($stack){
        let currentHeight;
        if( init == true )
          currentHeight = $stack.height();

        // Creation of an array for the heights
        const elementHeights = $stack.height('auto').map(function(){
          return $(this).height();
        }).get();

        // Get max height value
        const maxHeight = Math.max.apply(null, elementHeights);

        if( init == true )
          $stack.height(currentHeight);

        // Set height
        $stack.height(maxHeight);
      }
    });

    this.init();
    return this;
  };

  $.serialflex = {
    refresh: function(){
      $window.trigger('resize.serialflex');
    }
  };

  $.fn.serialflex.defaults = {
    forceRefresh: false
  };

})(jQuery);
