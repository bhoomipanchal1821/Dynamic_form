const components = React.createClass({
    render: function() {
      return (
        <div>
          const counters = document.querySelectorAll('.value');
          const speed = 200;
          counters.forEach( counter =&gt; {'{'}
          const animate = () =&gt; {'{'}
          const value = +counter.getAttribute('akhi');
          const data = +counter.innerText;
          const time = value / speed;
          if(data &lt; value) {'{'}
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
          {'}'}else{'{'}
          counter.innerText = value;
          {'}'}
          {'}'}
          animate();
          {'}'});
        </div>
      );
    }
  });

  export default components;