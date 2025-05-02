<script>
    const button = document.getElementById('enterButton');
    const logo = document.getElementById('logo');
    const audio = document.getElementById('bg-audio');

    setTimeout(() => {
      button.style.display = 'inline-block';
    }, 6000);

    button.addEventListener('click', () => {
      window.location.href = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hogwarts_castle_model.jpg';
    });
  </script>