      window.onload = function() {
        var ulelm = document.getElementById('artwork');
        var styles = ['vine', 'sky', 'lava'];
          for(var i=0; i<100; i++) {
  	        var lielm = document.createElement('li');
            lielm.className = styles[i%styles.length];
            ulelm.appendChild(lielm);
          }

        var body = document.getElementsByTagName("body");

        var menuElm = document.createElement('section');
            menuElm.setAttribute("class","menu");
        var logo = document.createElement("div");
            logo.setAttribute("class","logo");

        var title = document.createElement("div");
            title.setAttribute("class","title");
        var blur = document.createElement("div");
            blur.setAttribute("class","blur");
            menuElm.appendChild(logo);
            menuElm.appendChild(title);
            menuElm.appendChild(blur);

          var menuItems = {
              " Gallery": "fa fa-building-o",
              " Map": "fa fa-map-marker",
              " Favorites": "fa fa-heart-o",
              " Artwork": "fa fa-picture-o",
              " About": "fa fa-info-circle",
              " Help": "fa fa-question-circle"};
          var menuUl = document.createElement('ul');

          for(item in menuItems) {
  	        var menuItemElm = document.createElement('li');
            var menuIconElm = document.createElement('i');
            menuIconElm.className = menuItems[item];
            menuItemElm.appendChild(menuIconElm);
            var menuText = document.createTextNode(item);
            menuItemElm.appendChild(menuText);
            menuUl.appendChild(menuItemElm);
          }
          menuUl.className = "menuItems";
          menuElm.appendChild(menuUl);
          body[0].appendChild(menuElm);

          $(".menuItems").toggleClass("gray");

          $(".logo").click(function() {
            $(".menuItems").toggleClass("style-change");                 $(".menuItems").toggleClass("gray");
            $(".logo").toggleClass("logo-change");
        });
      };
