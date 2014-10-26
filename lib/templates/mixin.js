define(function (require) {
<%
  mixinName = _.camelize(name);
  mixinName = options['capitalize']? _.capitalize(mixinName): mixinName;
%>
  'use strict';

  /**
   * Module exports
   */

  return <%= mixinName %>;

  /**
   * Module function
   */

  function <%= mixinName %>() {
    this.attributes({

    });

    this.after('initialize', function () {

    });
  }

});
