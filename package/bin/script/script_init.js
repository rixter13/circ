// Generated by CoffeeScript 1.4.0
(function() {
  var onInitMessage;

  window.parent.postMessage({
    type: 'onload'
  }, '*');

  onInitMessage = function(e) {
    if (!(e.data.type === 'source_code' && (e.data.sourceCode != null))) {
      return;
    }
    removeEventListener('message', onInitMessage);
    eval(e.data.sourceCode);
  };

  addEventListener('message', onInitMessage);

}).call(this);